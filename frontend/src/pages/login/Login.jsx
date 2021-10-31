import "./login.css";
import React, { useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {
        const data= { username: username, password: password};
        axios.post("http://localhost:3001/api/login", data).then((response)=>{
            if(response.data.error){
                alert(response.data.error);
            } else {
                sessionStorage.setItem("accessToken", response.data);
                alert("Usuário " + username + " logado com sucesso")
                history.push("/principal");
            }
            
        })
        
    };

    let history = useHistory();
    
    return (
        <div className="login">
            <div className="formContainer" style={{width:"22rem", marginTop:"1rem"}}>
                <div className="addPostTitle"><h3>Faça o login abaixo</h3></div>
                <label>Login</label>
                <input type="text" onChange={(event) =>{setUsername(event.target.value)}} />
                <label>Password</label>
                <input type="password" onChange={(event) => {setPassword(event.target.value)}} />
                <button onClick={login}>Logar</button>
            </div> 
        </div>
    )
}

export default Login
