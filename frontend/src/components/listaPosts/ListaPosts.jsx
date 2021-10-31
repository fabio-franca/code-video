import "./listaPosts.css"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa"

function ListaPosts() {
    const [listOfPosts, setListOfPosts] = useState([]);
    let history = useHistory();
    
    useEffect(() => {
        axios.get("http://localhost:3001/api/posts").then((response) => {
          setListOfPosts(response.data);
        });
      }, []);

    return (
        <div className="listaPosts">
            <div className="listaConteudo">
            {listOfPosts.map((value, key) => {
                return(
                    <>
                        <div key={key} className="card orange blue" onClick={() => {
                                 history.push(`/post/${value.id}`); }}>
                        <div className="conteudoIcon">
                                    <FaPlay/>
                                </div>
                            <div className="conteudo">
                                <input type="hidden" value={value.id} />
                                <div className="conteudoTitulo">
                                        <h3>{value.titulo}</h3>
                                </div>
                                <div className="conteudoCategoria">
                                    <label>Música</label>
                                </div>  
                            </div>
                            <div className="conteudoImg">
                                    <img src={value.capa} alt="" />
                            </div>
                            {/* <div className="link">
                            <iframe width="560" height="315" src={value.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div> */}   
                        </div>  
                    </>
                 );
            })}
            </div>
        </div>
    );
}
export default ListaPosts;
