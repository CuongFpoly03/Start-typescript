import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { DataSigin } from "../interface";
import { useNavigate } from "react-router-dom";
import SuccessLogin from "../components/SuccessLogin";

const Login: React.FC = () => {
  ////đãn tới địa chỉ ...
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [messager, setMessager] = useState<boolean>(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // gửi yêu cầu
      console.log("email:", email);
      console.log("password:", password);
      const data: DataSigin = {
        email: email,
        password: password,
      };
      console.log(JSON.stringify(data));
      const API:string = "https://dummyjson.com/api/login";
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("k thực hành được");
      }
      const datas = await res.json()
      console.log(datas.accessToken);
      const token:string =datas.accessToken;
      const role:string =datas.User.role;
      console.log(datas)
      // luuw
      if(datas.accessToken != undefined){
          localStorage.setItem('token', token);
          localStorage.setItem('User', role);
          setMessager(true);
          navigate('/');
      }
    } catch (error) {
      console.log(error);
    }

  };
  console.clear();
  console.log(localStorage);
  console.log(email);
  console.log(password);
  return (
    <div className="container">
      <Navbar />
      <h1 className="text-center text-xxl-end">Login</h1>
      <h1 className="text-center text-xxl-end text-success">
      {
        messager ? <SuccessLogin/> : ""
      }
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary text-dark">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
