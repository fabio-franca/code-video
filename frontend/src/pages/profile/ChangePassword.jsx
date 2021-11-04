import React, {useState} from 'react'
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
            <h3>Altere sua senha aqui: </h3>
            <input type="text" placeholder="Senha antiga..." onChange={(event)=>{
                setOldPassword(event.target.value)
            }}/>
            <input type="text" placeholder="Nova senha" onChange={(event)=>{
                setNewPassword(event.target.value)
            }}/>
            <button onClick={changePassword}>Salvar mudanças</button>
        </div>
    )
}

export default ChangePassword
