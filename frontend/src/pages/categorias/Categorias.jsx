import "../../components/listaPosts/listaPosts.css";
import React, {useContext} from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlay, FaUser } from "react-icons/fa"
import { BiLike, BiDislike } from "react-icons/bi"
import { AuthContext } from "../../helpers/AuthContext";

function Categorias() {
    let { id } = useParams(); 
    const [listaCategorias, setListaCategorias] = useState([]);
    let history = useHistory();
    
    useEffect(() => {
        if(!localStorage.getItem("accessToken")){      //Senão tiver usuário logado, redireciona para página Login
            history.push('/login')
        } else {
            axios.get(`http://localhost:3001/api/posts/categorias/${id}`).then((response) => {
                setListaCategorias(response.data);
              });
        } 
    }, []);

    const likeAPost = (postId) =>{
        axios.post("http://localhost:3001/api/likes", 
        {PostId: postId}, 
        { headers: { accessToken: localStorage.getItem("accessToken" )
        }}).then((response) => {
            setListaCategorias(
              listaCategorias.map((post) => {
                if (post.id === postId) {
                  if (response.data.liked) {
                    return { ...post, Likes: [...post.Likes, 0] };
                  } else {
                    const likesArray = post.Likes;
                    likesArray.pop();
                    return { ...post, Likes: likesArray };
                  }
                } else {
                  return post;
                } })
                );
              });
          };
        
          const unlikeAPost = (postId) =>{
            axios.post("http://localhost:3001/api/unlikes/unlike", 
            {PostId: postId}, 
            { headers: { accessToken: localStorage.getItem("accessToken" )
            }}).then((response) => {
                setListaCategorias(
                  listaCategorias.map((post) => {
                    if (post.id === postId) {
                      if (response.data.unliked) {
                        return { ...post, Unlikes: [...post.Unlikes, 0] };
                      } else {
                        const unlikesArray = post.Unlikes;
                        unlikesArray.pop();
                        return { ...post, UnLikes: unlikesArray };
                      }
                    } else {
                      return post;
                    } })
                    );
                  });
              };

    return (
        <div className="listaPosts">
            <div className="listaConteudo">
            {listaCategorias.map((value, key) => {
                return(
                    <>
                        <div key={key} className="card orange blue">
                            <div className="conteudoImg"
                                onClick={() => {
                                history.push(`/post/${value.id}`); }}>
                                    <img src={value.Capa.img} alt="" />
                            </div>
                            <div className="conteudo">        
                                <div className="conteudoTitulo">
                                     <input type="hidden" value={value.id} />
                                        <h3>{value.titulo}</h3>
                                </div>
                                <div className="conteudoDescricao">
                                    <p>{value.descricao}</p>
                                </div>
                                <div className="conteudoCategoria">
                                    <label>{value.Categoria.descricao}</label>
                                </div>
                                <div className="conteudoLike">
                                    <button onClick={()=>{
                                        likeAPost(value.id);
                                    }}><BiLike/></button>
                                    <label>{value.Likes.length}</label>
                                </div>
                                <div className="conteudoUnlike">
                                    <button onClick={()=>{
                                        unlikeAPost(value.id);
                                    }}><BiDislike/></button>
                                    <label>{value.Unlikes.length}</label>
                                </div>
                                <div className="conteudoUser">
                                   <Link to={`/profile/${value.UserId}`}><i><FaUser/></i><p>{value.username}</p></Link>
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

export default Categorias
