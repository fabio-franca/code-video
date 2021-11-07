import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./changePassword.css"
import axios from 'axios'

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const changePassword = () =>{
        axios.put("http://localhost:3001/api/changePassword", {
            oldPassword: oldPassword, newPassword: newPassword
        }, { headers: {accessToken: localStorage.getItem("accessToken"),}
        ,}).then((response)=>{
            if(response.data.error)
            alert(response.data.error);
        })
    }

    return (
        <div>
            <div className="formContainer">
                <div className="addPostTitle"><h3>Altere sua senha aqui: </h3></div>
                <div className="changePasswordConteudo">
                    <div className="changePasswordAntigo">
                        <input type="password" placeholder="Senha antiga..." onChange={(event)=>{
                            setOldPassword(event.target.value)
                        }}/>
                    </div>
                    <div className="changePasswordNovo">
                        <input type="password" placeholder="Nova senha" onChange={(event)=>{
                            setNewPassword(event.target.value)
                        }}/>
                    </div>
                    <button onClick={changePassword}>Salvar mudanças</button>
                </div>
            </div>
            <div className="voltarBtn"><Link to="/principal"><button>Voltar a página principal</button></Link></div>
        </div>
    )
}

export default ChangePassword
