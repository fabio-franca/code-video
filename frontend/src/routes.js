import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Principal from './pages/principal/Principal';
import AddPost from './pages/posts/addPost/AddPost';
import ViewPost from './pages/posts/viewPost/ViewPost';
import Registration from './pages/registration/Registration';
import Login from './pages/login/Login';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import "./components/topbar/topbar.css"
import {BsFillPersonFill, BsPersonPlus, BsTag, BsFillDoorOpenFill} from "react-icons/bs";
import {MdPostAdd} from "react-icons/md"
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "./helpers/AuthContext"
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router';
import Profile from './pages/profile/Profile';
import ChangePassword from './pages/profile/ChangePassword';
import Footer from './components/footer/Footer';
import "./routes.css"
import Categorias from './pages/categorias/Categorias';

export default function Routes(){
    const [authState, setAuthState] = useState({username: "", id: 0, status: false,});
    let history = useHistory();

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

    const logout = () =>{
        localStorage.removeItem("accessToken");
        setAuthState({username: "", id: 0, status: false});
        alert("Obrigado pela visita! Até logo..."); 
    };

    return(
        <AuthContext.Provider value={{ authState, setAuthState}}>
        <BrowserRouter>
            <div className="header">
                   <div className="logo">
                       <div className="headerTitle">
                       <a href="/principal"><img src="../images/CodeVideo-logo.jpg" alt="" /></a>
                            <h3>Code<span>Video</span></h3>
                       </div>
                   </div>
                   <ul>
                       
                       
                       {!authState.status ? (
                        <>
                        <li><Link to="/login"><BsFillPersonFill className="itemIcon"/>Login</Link></li>
                        <li><Link to="/registration"><BsPersonPlus  className="itemIcon"/>Registrar</Link></li>
                        </>
                       ) : (<>
                            <div style={{display:"flex"}}><Link style={{marginRight:"4px"}} to="/posts/add"><MdPostAdd className="itemIcon"/> Criar Post</Link></div>
                            <li className="dropdown">
                                <a className="dropbtn"><BsTag  className="itemIcon"/>Categorias</a>
                                <div class="dropdown-content">
                                        <a href="/principal/1">Frontend</a>
                                        <a href="/principal/2">Backend</a>
                                        <a href="/principal/3">Dados</a>
                                    </div>
                                </li>
                            <p className="userLogin border-gradient">Olá, {authState.username}!</p>
                            <button onClick={logout} className="logout"><BsFillDoorOpenFill className="itemIcon"/>Logout</button>
                            
                           </>)
                        }
                       
                    </ul>
               </div>
            <Switch>
                <Route path='/principal'  exact component={Principal}/>
                <Route path="/posts/add" component={AddPost}/>
                <Route path="/post/:id" component={ViewPost}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile/:id" component={Profile}/>
                <Route path="/changePassword" component={ChangePassword}/>
                <Route path="/principal/:id" component={Categorias}/>
                <Route path="*" exact component={PageNotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
        </AuthContext.Provider>
    );

}