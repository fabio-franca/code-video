import React, { useEffect, useState, useContext} from 'react';
import "./profile.css"
import { useParams, useHistory } from "react-router-dom"
import axios from 'axios';
import { FaPlay, FaUser } from "react-icons/fa"
import { AuthContext } from "../../helpers/AuthContext";

function Profile() {
    let { id } = useParams();       //Desestrutura para pegar o id
    let history = useHistory();
    const [username, setUsername] = useState(""); 
    const [listOfPosts, setListOfPosts] = useState([]);
    const { authState } = useContext(AuthContext);


    useEffect(() => {
       axios.get(`http://localhost:3001/api/basicInfo/${id}`).then((response)=>{
            setUsername(response.data.username);
       })
       axios.get(`http://localhost:3001/api/posts/byUserId/${id}`).then((response)=>{
            setListOfPosts(response.data);
       })
    }, [])
    return (
        <div className="profilePageContainer">
            <div className="basicInfo">
                <h3>Usuário: {username}</h3>
                {authState.username === username && 
                    <button onClick={()=>{history.push("/changePassword")}}>Alterar minha senha</button>}
            </div>
            <div className="listOfMyPosts"><h3>Meus posts: </h3>
            <table>
                            <tr>
                                <th>Id</th>
                                <th>Título</th>
                                <th>Categoria</th>
                                <th>Likes</th>
                                <th>Deslikes</th>
                            </tr>
            {listOfPosts.map((value, key) => {
                return(
                    <>
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.titulo}</td>
                                <td>HTML</td>
                                <td>{value.Likes.length}</td>
                                <td>{value.Unlikes.length}</td>
                                <td onClick={() => {
                                history.push(`/post/${value.id}`); }}>
                                    <img src={value.capa} alt="" width="100px" />
                                </td>
                            </tr>
                    </>
                 );
            })}
             </table>
            </div>
        </div>
    )
}

export default Profile
