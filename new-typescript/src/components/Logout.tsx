import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logout:React.FC = () => {
    const navigate = useNavigate();
    const Logout = ():void => {
        localStorage.clear();
        navigate("/login")
    }
  return (
    <div>
        <button onClick={Logout} className='btn btn-danger' >Logout</button>
    </div>
  )
}

export default Logout