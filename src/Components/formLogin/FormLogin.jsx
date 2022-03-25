import "./formLogin.css";
import { Card, Form } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";
import { guardarEnLocalStorage } from "../../utils/localStorage";
import { useHistory } from "react-router-dom";

// login google
import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

export const FormLogin = ({ requestUserData }) => {
  
  const responseGoogle = (response) => {
    console.log(response);
  };

  const navigate = useHistory();
  // Validaciones reactBoot
  const [validated, setValidated] = useState(false);

  const [input, setInput] = useState({ email: "", password: "" });

  const scrollToTop = () => {
    window.scrollTo(0, 400);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    if (newInput.email.length < 20 && newInput.password.length < 15) {
      setInput(newInput);
    } else {
      swal("Alcanzaste el numero maximo de caracteres");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //event.stopPropagation();

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/login",
        input
      );
      const user = response.data;
      const token = user.token;
      guardarEnLocalStorage({ key: "token", value: { token } });
      guardarEnLocalStorage({ key: "user", value: { user } });
      swal("Bienvenido/a " + user.name);

      await requestUserData();
      //El push redirecciona a la pantalla indicada en el parametro.
      navigate.push("/");
      scrollToTop();
    } catch (error) {
      console.error(error);
      swal({
        title: "Datos Incorrectos / Usuario No Registrado",
        text: "Aun no tienes cuenta? Registrate ya mismo!",
        icon: "error",
        buttons: ["No, Gracias", "Registrate!"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          navigate.push("/register");
        } else {
          swal("Sera en otra Ocacion!");
        }
      });
    }
    setValidated(true);
    if (setValidated === true) {
      event.target.reset();
    }
  };

  const errorLink = () => {
    swal("Oops!", "Todavia no trabajamos en esto :(", "error");
  };

  return (
    <Card className="d-flex justify-content-center form-login">
      <Card.Body>
        <div className="d-flex flex-column align-items-center">
          <h3 className="header">Bienvenido/a</h3>
        </div>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 border-0" controlId="formBasicEmail">
            <Form.Control
              name="email"
              onChange={(e) => handleChange(e)}
              type="email"
              className="col-11 login-input"
              placeholder="Email"
              maxLength="25"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 border-0" controlId="formBasicPassword">
            <Form.Control
              name="password"
              onChange={(e) => handleChange(e)}
              type="password"
              className="col-11 login-input"
              placeholder="Password"
              minLength="6"
              maxLength="15"
              required
            />
          </Form.Group>
          <button type="submit" className="btn-general-style">
            {" "}
            Iniciar sesión
          </button>
        </Form>
            <GoogleLogin className="w-100 d-flex justify-content-center"
              clientId="340029822027-bf53tdkbv4uiabpo2hj6m7fa4pbh1n08.apps.googleusercontent.com"
              buttonText="Continuar con Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}/>
          <div className="d-flex flex-column align-items-center justify-content-center crea-cuenta mt-2">
            <p className="mb-1">¿Aun no eres miembro?</p>
            <a href="/register">Crea una cuenta</a>
          </div>
      </Card.Body>
    </Card>
  );
};
