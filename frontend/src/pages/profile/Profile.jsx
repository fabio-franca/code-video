import React, { useEffect, useState} from 'react';
import "./profile.css"
import { useParams, useHistory } from "react-router-dom"
import axios from 'axios';
import { FaPlay, FaUser } from "react-icons/fa"

function Profile() {
    let { id } = useParams();       //Desestrutura para pegar o id
    const [username, setUsername] = useState(""); 
    const [listOfPosts, setListOfPosts] = useState([]);
    let history = useHistory();

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
            <div className="basicInfo"><h2>Usuário: {username}</h2></div>
            <div className="listOfMyPosts">
            {listOfPosts.map((value, key) => {
                return(
                    <>
                        <div key={key} className="card orange blue">
                            <div className="conteudoImg"
                                onClick={() => {
                                history.push(`/post/${value.id}`); }}>
                                    <img src={value.capa} alt="" />
                            </div>
                            <div className="conteudo">        
                                <div className="conteudoTitulo">
                                     {/* <input type="hidden" value={value.id} /> */}
                                        <h3>{value.titulo}</h3>
                                </div>
                                <div className="conteudoDescricao">
                                    <p>{value.descricao}</p>
                                </div>
                                <div className="conteudoCategoria">
                                    <label>HTML</label>
                                </div>
                                <div className="conteudoLike">
                                    <label>{value.Likes.length}</label>
                                </div>
                                <div className="conteudoUnlike">
                                    <label>{value.Unlikes.length}</label>
                                </div>
                                <div className="conteudoUser">
                                   <i><FaUser/></i><p>{value.username}</p>
                                </div>  
                            </div>
                        </div>  
                    </>
                 );
            })}
            </div>
        </div>
    )
}

export default Profile
