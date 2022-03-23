import "./formLogin.css";
import { Card, Form } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";
import { guardarEnLocalStorage } from "../../utils/localStorage";
import { useNavigate } from 'react-router-dom';

export const FormLogin = ({ requestUserData, cart }) => {

  const navigate = useNavigate();
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
    event.stopPropagation();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        input
      );
      const { token, name } = response.data;
      guardarEnLocalStorage({ key: "token", value: { token } });
      if (cart.length !== 0) {
        swal("Genial " + name + " estas listo ");
      } else {
        swal("Bienvenido/a " + name);
      }
      await requestUserData();
      //El push redirecciona a la pantalla indicada en el parametro.
      navigate('/')
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
            navigate('/register');
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
        <div className="d-flex flex-column">
          <button
            onClick={errorLink}
            type="submit"
            className="responsive-login-face"
          >
            {" "}
            <FaFacebookSquare className="mb-1" /> Iniciar sesión con facebook
          </button>
          <div className="d-flex flex-column align-items-center justify-content-center crea-cuenta mt-2">
            <p className="mb-1">¿Aun no eres miembro?</p>
            <a href="/register">Crea una cuenta</a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
