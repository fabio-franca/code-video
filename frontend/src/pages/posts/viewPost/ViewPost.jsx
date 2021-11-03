import "./viewPost.css"
import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import {BsXCircle} from "react-icons/bs"
import { AuthContext } from "../../../helpers/AuthContext"


function ViewPost() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { authState } = useContext(AuthContext);
    let history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/posts/byId/${id}`).then((response) => {
          setPostObject(response.data);
        });

        axios.get(`http://localhost:3001/api/comments/${id}`).then((response) => {
            setComments(response.data);
        });
      }, []);

    const addComment = ()=>{
        axios.post("http://localhost:3001/api/comments", {commentBody: newComment, PostId: id},
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
            .then((response)=>{         //Dessa forma é possível inserir comentarios em tempo real!
                if(response.data.error){
                    alert("É necessário se logar para realizar comentários")
                } else {
                const commentToAdd = {commentBody: newComment, username: response.data.username} 
                setComments([...comments, commentToAdd]);
                setNewComment(""); //Limpa o input, realizando um refresh
                } 
            });
    };

    const deleteComment = (id) => {
        axios.delete(`http://localhost:3001/api/comments/${id}`, 
                    {headers: {accessToken: localStorage.getItem("accessToken")}
                }).then(()=>{
                    setComments(comments.filter((val)=>{
                        return val.id != id
                    }))     
                })
    }

    const deletePost = (id) => {
        axios.delete(`http://localhost:3001/api/posts/${id}`, {
            headers: {accessToken: localStorage.getItem("accessToken")}
        }).then(()=>{
            alert("Post excluído com sucesso")
            history.push("/principal");
        },[]);
    }

    return (
            <div className="containerPlayer">
                <div className="conteudo">
                    <div className="player">
                        <iframe className="playerIframe" width="1000" height="450" src={postObject.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="link">
                        <Link to='/principal'><button className="returnBtn">Voltar a página principal</button></Link>
                        <div className="deletePost">
                        {authState.username === postObject.username &&
                        <button onClick={()=>{deletePost(postObject.id)}}>Excluir Post</button>}
                        </div>
                    </div>
                   
                </div>
                <div className="addCommentContainer">
                    <input type="text" autoComplete="off" value={newComment} placeholder="Seu comentário..."
                        onChange={(event)=>{
                            setNewComment(event.target.value);
                        }} />
                    <button onClick={addComment}>Comentar</button>
                </div> 
                <div className="listOfComments">
                    {comments.map((comment, key)=>{
                       
                        return (         
                            <div className="comment">
                                <label><b>{comment.username}</b></label>
                                <div className="commentBody">{comment.commentBody}</div>
                               {authState.username === comment.username && <button onClick={() => {deleteComment(comment.id)}} className="deleteComment"><BsXCircle className="deleteIcon"/></button>}
                                <br/> 
                            </div>                          
                        );
                    })}
                </div>
            </div>
    );
}

export default ViewPost;
