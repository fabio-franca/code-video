import "./viewPost.css"
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewPost() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/api/post/${id}`).then((response) => {
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
                    accessToken: sessionStorage.getItem("accessToken"),
                },
            })
            .then((response)=>{         //Dessa forma é possível inserir comentarios em tempo real!
                if(response.data.error){
                    alert(response.data.error)
                } else {
                const commentToAdd = {commentBody: newComment} 
                setComments([...comments, commentToAdd]);
                setNewComment(""); //Limpa o input, realizando um refresh
                } 
            });
    };

    return (
            <div className="containerPlayer">
                <div className="conteudo">
                    <div className="player">
                        <iframe className="playerIframe" width="1000" height="450" src={postObject.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="link">
                        <Link to='/principal'>Voltar a página principal</Link>
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
                                <b>{comment.commentBody}</b> - ({comment.createdAt})
                            </div>                            
                        );
                    })}
                </div>
            </div>
    );
}

export default ViewPost;
