import "./topbar.css"
import {BsFillPersonFill, BsPersonPlus, BsTag} from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Topbar() {
    const [authState, setAuthState] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:3001/api/auth", {headers:{
            accessToken: localStorage.getItem("accessToken"),
        },
        }).then((response)=>{
            if(response.data.error){
                setAuthState(false);
            } else {
                setAuthState(true);
            }
        })
    }, []);

    return (
               <div className="header">
                   <div className="logo">
                       <div className="headerTitle">
                       <a href="/principal"><img src="../images/CodeVideo-logo.jpg" alt="" /></a>
                            <h3>Code<span>Video</span></h3>
                       </div>
                   </div>
                   <ul>
                       <li><a href="#"><BsTag  className="itemIcon"/>Categorias</a></li>
                       <AuthContext.Provider value={{ authState, setAuthState}}>
                       {!authState ? (
                        <>
                        <li><Link to="/login"><BsFillPersonFill className="itemIcon"/>Login</Link></li>
                        <li><Link to="/registration"><BsPersonPlus  className="itemIcon"/>Cadastrar</Link></li>
                        </>
                       ) : (<button>Logout</button>)}
                       </AuthContext.Provider>
                    </ul>
               </div>
    )
}
