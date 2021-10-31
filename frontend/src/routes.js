import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import EditCliente from './pages/EditCliente';
import AddCliente from './pages/AddCliente';
import Principal from './pages/principal/Principal';
import AddPost from './pages/posts/addPost/AddPost';
import ViewPost from './pages/posts/viewPost/ViewPost';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/edit/:id' component={EditCliente}/>
                <Route path='/add' component={AddCliente}/>
                <Route path='/principal' component={Principal}/>
                <Route path="/posts/add" component={AddPost}/>
                <Route path="/post/:id" component={ViewPost}/>
            </Switch>
        </BrowserRouter>
    );

}