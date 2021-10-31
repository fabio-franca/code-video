import { Component } from "react";
import api from '../../service/api';
export default class EditCliente extends Component{
    
    state = {
      newCliente:{
        id:'',
        nome:'',
        email:'',
        idade:'',
    },
      id:this.props.match.params.id,
      cad_nome:'',
      cad_email:'',
      cad_idade:'',
    };

    componentDidMount = async e =>{
   
      const response = await api.get(`/cliente/${this.state.id}`)
      
      this.setState({
        cad_nome:response.data.nome,
        cad_email:response.data.email,
        cad_idade:response.data.idade,
      });
    
      console.log(response);

    }

    handleNomeChange = e =>{
      this.setState({cad_nome: e.target.value});
    };

    handleEmailChange = e =>{
      this.setState({cad_email: e.target.value});
    };

    handleIdadeChange = e =>{
        this.setState({cad_idade: e.target.value});
    };  
  
    handleOnSubmit = async e =>{
      const {id,cad_nome,cad_email,cad_idade} = this.state; 

       e.preventDefault();
  
       const Cliente = {'id': Number(id),'nome':cad_nome,'email':cad_email,'idade':Number(cad_idade)}
  
        await api.put(`/cliente`,Cliente)
        .then(console.log(Cliente));

        alert('usuário atualizado com sucesso!')
    }

    render(){

      const {id,cad_nome,cad_email,cad_idade} = this.state;

        return(

            <div className="container" >
                
            <div className="content">      
            
              <div id="Alterar Cadastro">
                <form onSubmit={this.handleOnSubmit}> 
                  <h1>Alterar Cadastro</h1> 
                  
                  <p> 
                    <label htmlFor="id_cad">Id</label>
                    <input id="id_cad" 
                    name="id_cad" 
                    type="number"
                    readOnly
                    value={id}
                    />
                  </p>  
        
                  <p> 
                    <label htmlFor="nome_cad">Seu nome</label>
                    <input id="nome_cad" 
                      name="nome_cad" 
                      required="required" 
                      type="text" 
                      placeholder="Digite seu nome" 
                      value={cad_nome}
                      onChange={this.handleNomeChange}
                      />
                  </p>
                   <p> 
                    <label htmlFor="email_cad">Seu email</label>
                    <input id="email_cad" 
                      name="email_cad" 
                      required="required" 
                      type="text" 
                      placeholder="Digite seu email"
                      value={cad_email}
                      onChange={this.handleEmailChange}
                      /> 
                  </p>

                  <p> 
                    <label htmlFor="idade_cad">Sua idade</label>
                    <input id="idade_cad" 
                      name="idade_cad"
                       required="required"
                       type="number"
                         placeholder="Digite sua idade"
                         value={cad_idade}
                         onChange={this.handleIdadeChange}
                         />
                  </p>

                  <p> 
                    <input type="submit" /> 
                  </p>
                </form>
              </div>
            </div>
          </div>
        )
    }     
}
