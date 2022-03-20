import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import GoogleLogin from "react-google-login";

export const Login = () => {
  const [validated, setValidated] = useState(false);

  const [input, setInput] = useState({ email: "", password: "" });

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
    event.stopPropagation();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        input
      );
      const { name } = response.data;
      swal("Bienvenido " + name);
      //El push redirecciona a la pantalla indicada en el parametro.
    } catch (error) {
      console.error(error);
      if (input.email === "" && input.password === "") {
        swal("Faltan datos", "Completar los campos obligatorios", "warning");
      } else if (input.email === "") {
        swal("completa el email");
      } else if (input.password === "") {
        swal("completa la contraseña");
      } else if (error.response.data) {
        swal({
          title: "Datos Incorrectos / Usuario No Registrado",
          text: "Aun no tienes cuenta? Registrate ya mismo!",
          icon: "error",
          buttons: ["No, Gracias", "Registrate!"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
          } else {
            swal("Sera en otra Ocacion!");
          }
        });
      } else {
        alert("Error de conexion");
      }
    }
    setValidated(true);
    if (setValidated === true) {
      event.target.reset();
    }
  };

  const responseGoogle = (respuesta) => {
      console.log(respuesta);
  }

  return (
    <div className="login-estilo">
      <Link to="/">
        <FontAwesomeIcon className="m-4 text-white" icon={faHouse} />
      </Link>
      <div className="login">
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
        <Link to="/regiser">
          <button type="submit" className="btn-general-style">
            {" "}
            Registrar
          </button>
          <GoogleLogin
            clientId="340029822027-bf53tdkbv4uiabpo2hj6m7fa4pbh1n08.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Link>
      </div>
    </div>
  );
};
