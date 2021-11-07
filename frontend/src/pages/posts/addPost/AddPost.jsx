import React, {useContext, useEffect , useRef, useState} from "react";
import "./addPost.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../../helpers/AuthContext";

function AddPost() {
    const {authState} = useContext(AuthContext);
    let history = useHistory();
    const initialValues = {
        titulo: "",
        descricao: "",
        CategoriaId: "",
        CapaId: "",
        video: "",
      };

    useEffect(()=>{
      if(!localStorage.getItem("accessToken")){
        history.push("/login")
      }
    },[]);

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().min(3).max(20).required("Título é obrigatório"),
        descricao: Yup.string().min(3).max(100).required("Descrição é obrigatória"),
        CategoriaId: Yup.string().required("Categoria é obrigatória"),
        CapaId: Yup.string().required("Capa é obrigatória"),
        video: Yup.string().required("Link é obrigatório"),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/api/posts", data,{
          headers: {accessToken: localStorage.getItem("accessToken")},
        }).then((response) => {
          if(response.data){
            alert("Post realizado com sucesso!");
            history.push("/principal");
          } else {
            console.log("Usuário ou senha incorretos");
          }
          
        });
      };


    return (
        <div className="addPost">
            <div className="addPostTitle"><h3>Cadastrar Postagem</h3></div>
            <Formik  initialValues={initialValues} onSubmit={onSubmit} 
                                                validationSchema={validationSchema}>
            <Form className="formContainer" encType="multipart/form-data">
                <label htmlFor="titulo">Título</label>
                <Field id="inputCreatePost" name="titulo"/>
                <ErrorMessage name="titulo" component="span" className="errorMessage" />

                <label htmlFor="descricao">Descrição</label>
                <Field as="textarea" id="inputCreatePost" name="descricao" type="text" className="inputDescricao"/>
                <ErrorMessage name="descricao" component="span" className="errorMessage" />

                <div className="categoriaECapa"> 
                  <div className="categoriaContainer">
                    <label htmlFor="CategoriaId">Categoria</label>
                    <Field as="select" id="inputCreatePost" name="CategoriaId" type="text" required>
                    <option value = "" disabled="disabled">Selecione uma categoria</option>
                    <option value = "1">Frontend</option> 
                    <option value = "2">Backend</option>
                    <option value = "3">Dados</option>
                    </Field>
                  </div>

                  <div className="capaContainer">
                    <label htmlFor="CapaId">Capa</label>
                    <Field as="select" id="inputCreatePost" name="CapaId" type="text" required>
                    <option value = "" disabled="disabled">Selecione um estilo</option>
                    <option value = "1">HTML</option> 
                    <option value = "2">CSS</option>
                    <option value = "3">JAVASCRIPT</option>
                    <option value = "4">NODE</option>
                    <option value = "5">REACT</option>
                    <option value = "6">MYSQL</option>
                    </Field>
                  </div>
                </div>
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
