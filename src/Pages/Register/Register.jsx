import React from 'react'
import './register.scss';
import { Input, Button, Gap, Link } from "../../Components"
import { useHistory } from "react-router-dom";


const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src="https://placeimg.com/640/480/any" alt="bg" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Sign Up" onClick={() => history.push("/login")} />
        <Gap height={10} />
        <Link title="kembali ke Login" onClick={() => history.push("/login")} />
      </div>
    </div>
  )
}

export default Register
