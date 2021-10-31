import "./registration.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom"


function Registration() {
    const initialValues = {
        username: "",
        password: "",
      };
    
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required("Usuário é obrigatório"),
        password: Yup.string().min(6).max(10).required("Senha é obrigatória"),
    });

    const onSubmit = (data) =>{
        axios.post("http://localhost:3001/api/users", data).then(()=>{
            alert("Usuário registrado com sucesso!");
            history.push("/principal");
        })
    };

    let history = useHistory();

    return (
        <div className="registration">
            <div className="addPostTitle"><h3>Registrar-se</h3></div>
            <Formik  initialValues={initialValues} onSubmit={onSubmit} 
                                                validationSchema={validationSchema}>
            <Form className="formContainer" style={{width:"30%"}}>
                <label>Usuário</label>
                <Field 
                    autocomplete="off"
                    id="inputCreateUser"
                    name="username"
                />
                <ErrorMessage name="username" component="span" className="errorMessage" />
                <label>Senha</label>
                <Field 
                    type="password"
                    autocomplete="off"
                    id="inputCreateUser"
                    name="password"
                    placeholder="******"
                />
                <ErrorMessage name="password" component="span" className="errorMessage" />
                <button type="submit">Cadastrar</button>
            </Form>
            
            </Formik>
        </div>
    )
}

export default Registration;
