import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div style={{margin:"2rem"}}>
            <h3>Página não encontrada!<br/>
            Verifique se o link informado está correto. Tente nossa home page: <br/></h3>
            <div style={{display:'flex', flexDirection:'row', marginTop:"2rem"}}>
                <h4><Link to="/principal">Home</Link></h4>
            </div>
            
        </div>
    )
}

export default PageNotFound
