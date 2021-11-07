import React from 'react'
import "./footer.css"
import { AuthContext } from "../../helpers/AuthContext";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function Footer() {
    const [authState, setAuthState] = useState({username: "", id: 0, status: false,});

    useEffect(()=>{
        axios.get("http://localhost:3001/api/auth", {headers:{
            accessToken: localStorage.getItem("accessToken"),
        },
        }).then((response)=>{
            if(response.data.error){
                setAuthState({...authState, status: false});
            } else {
                setAuthState({username: response.data.username, id: response.data.id, status: true});
            }
        })
    }, []);

    return (
        <AuthContext.Provider value={{ authState, setAuthState}}>
        <div className="footerContainer">
            <div className="footerConteudo">
                <div className="footerLinks">
                    <h2>Nossos Links</h2>
                    <ul>
                        <Link to="/posts/add"><li>Criar Post</li></Link>
                        {!authState.status ? (<div></div>) : (<Link to={`/profile/${authState.id}`}><li>Meus Posts</li></Link>)}
                        <Link to="/login"><li>Login</li></Link>
                        <Link to="/registration"><li>Registrar</li></Link>
                    </ul>
                </div>
                <div className="footerInformations">
                    <h2>Sobre Nós</h2>
                    <p>Já pensou naquele lugar para postar seus vídeos ou mesmo assistir os melhores vídeos selecionados por alguém? Pensou CodeVideo!</p>
                </div>
                <div className="footerContact">
                    <h2>Contato</h2>
                    <ul>
                        <li>Contato: (85) 99999-0000</li>
                        <li>Rua dos brasileiros - Nº 0</li>
                        <li>Email: codevideo@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">CodeVideo - Todos os direitos reservados</div>
        </div>
        </AuthContext.Provider>
    )
}

export default Footer
