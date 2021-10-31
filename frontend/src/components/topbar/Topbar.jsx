import "./topbar.css"
import {BsFillPersonFill, BsPersonPlus, BsTag} from "react-icons/bs";

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
                       <li><a href="#"><BsFillPersonFill className="itemIcon"/>Login</a></li>
                       <li><a href="#"><BsTag  className="itemIcon"/>Categorias</a></li>
                       <li><a href="#"><BsPersonPlus  className="itemIcon"/>Cadastrar</a></li>
                   </ul>
               </div>
    )
}
