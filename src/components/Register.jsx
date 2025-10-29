import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const user = {
            name : name,
            email : email,
            pass : pass,
        }

        localStorage.setItem("user",JSON.stringify(user))
        navigate("/login")
    }
  return (
    <div>
         <h1>Form Register</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setName(e.target.value)} /><br />
            <input type="email" onChange={(e)=>setEmail(e.target.value)} /><br />
            <input type="password" onChange={(e)=>setPass(e.target.value)} /><br />
            <button type='submit'>Rester</button>
        </form>
    </div>
  )
}

export default Register