import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { DataSigup } from "../interface";
import { useNavigate } from "react-router-dom";
const Register: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
  };
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setPassword(e.target.value.trim());
  }
  const handleConfirm = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setConfirm(e.target.value.trim());
  }

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    const data:DataSigup  ={
      username: username,
      email: email,
      password: password,
      confirmPw: confirm
    }

    try {
      const API:string = "https://dummyjson.com/api/sigup";
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(data),
      })

      if(!res) {
        throw new Error("false");
      }
      const datas = await res.json();
      console.log(datas);
      navigate("/sigin")
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="container">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-xxl-end">Register</h1>
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
          <label htmlFor="exampleInputUsername" className="form-label">
          Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputusername"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Retype Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={confirm}
            onChange={handleConfirm}
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
        <button type="submit" className="btn btn-primary">
          Resgister
        </button>
      </form>
    </div>
  );
};

export default Register;
