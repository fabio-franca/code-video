import "./topbar.css"
import {BsFillPersonFill, BsPersonPlus, BsTag} from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

export default function Topbar() {
    return (
               <div className="header">
                   <div className="logo">
                       <div className="headerTitle">
                       <a href="/principal"><img src="../images/CodeVideo-logo.jpg" alt="" /></a>
                            <h3>Code<span>Video</span></h3>
                       </div>
                   </div>
                   <ul>
                       <li><Link to="/login"><BsFillPersonFill className="itemIcon"/>Login</Link></li>
                       <li><a href="#"><BsTag  className="itemIcon"/>Categorias</a></li>
                       <li><Link to="/registration"><BsPersonPlus  className="itemIcon"/>Cadastrar</Link></li>
                   </ul>
               </div>
    )
}
