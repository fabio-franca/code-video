import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import EditCliente from './pages/EditCliente';
import AddCliente from './pages/AddCliente';
import Principal from './pages/principal/Principal';
import AddPost from './pages/posts/addPost/AddPost';
import ViewPost from './pages/posts/viewPost/ViewPost';
import Registration from './pages/registration/Registration';
import Login from './pages/login/Login';

import "./components/topbar/topbar.css"
import {BsFillPersonFill, BsPersonPlus, BsTag, BsFillDoorOpenFill} from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "./helpers/AuthContext"
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router';

export default function Routes(){
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

    let history = useHistory();

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
                       <li><a href="#"><BsTag  className="itemIcon"/>Categorias</a></li>
                       
                       {!authState.status ? (
                        <>
                        <li><Link to="/login"><BsFillPersonFill className="itemIcon"/>Login</Link></li>
                        <li><Link to="/registration"><BsPersonPlus  className="itemIcon"/>Registrar</Link></li>
                        </>
                       ) : (<div style={{display:"flex"}}><p className="userLogin border-gradient">Olá, {authState.username}!</p><button onClick={logout} className="logout"><BsFillDoorOpenFill className="itemIcon"/>Logout</button></div>)}
                       
                    </ul>
               </div>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/edit/:id' component={EditCliente}/>
                <Route path='/add' component={AddCliente}/>
                <Route path='/principal' component={Principal}/>
                <Route path="/posts/add" component={AddPost}/>
                <Route path="/post/:id" component={ViewPost}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
        </AuthContext.Provider>
    );

}