import "./addPost.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom"

function AddPost() {
    const initialValues = {
        titulo: "",
        descricao: "",
        video: "",
      };

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().min(3).max(30).required("Título é obrigatório"),
        descricao: Yup.string().required("Descrição é obrigatória"),
        video: Yup.string().required("Link é obrigatório"),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/api/posts", data).then((response) => {
          if(response.data){
            alert("Post realizado com sucesso!");
            history.push("/principal");
          } else {
            console.log("Usuário ou senha incorretos");
          }
          
        });
      };

    let history = useHistory();
    
    return (
        <div className="addPost">
            <div className="addPostTitle"><h3>Cadastrar Postagem</h3></div>
            <Formik  initialValues={initialValues} onSubmit={onSubmit} 
                                                validationSchema={validationSchema}>
            <Form className="formContainer">
                <label htmlFor="titulo">Título</label>
                <Field id="inputCreatePost" name="titulo"/>
                <ErrorMessage name="titulo" component="span" className="errorMessage" />

                <label htmlFor="descricao">Descrição</label>
                <Field as="textarea" id="inputCreatePost" name="descricao" type="text" className="inputDescricao"/>
                <ErrorMessage name="descricao" component="span" className="errorMessage" />

                <label htmlFor="video">Link do vídeo</label>
                <Field id="inputCreatePost" name="video" placeholder="https://www.youtube.com/"/>
                <ErrorMessage name="video" component="span" className="errorMessage" />
                
                <button type="submit">Criar Post</button>
            </Form>
            </Formik>
        </div>
    );
}

export default AddPost;
