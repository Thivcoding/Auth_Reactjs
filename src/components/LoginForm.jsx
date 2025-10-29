import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const LoginForm = () => {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate();

    function loginSumbit(e){
        const user = localStorage.getItem("user")

        const userLogin = JSON.parse(user);

        e.preventDefault();
        if(email === userLogin.email){
            if(pass === userLogin.pass){
                alert("Login Sucessfully");
                navigate("/home");
            }else{
                alert("Password is Not Found");
            }
        }else{
            alert("Email Not Found!")
        }
    }
    

  return (
    <div>
        <h1>Form Logins</h1>
        <form action="" onSubmit={loginSumbit}>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} /><br />
            <input type="password" onChange={(e)=>setPass(e.target.value)} /><br />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm