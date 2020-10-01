import React from 'react'
import { Input, Button, Gap, Link } from "../../Components"
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src="https://placeimg.com/640/480/any" alt="bg" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Gap height={10} />
        <Link title="Belum punya akun? silahkan daftar" onClick={() => history.push("/register")} />
      </div>
    </div>
  )
}

export default Login
