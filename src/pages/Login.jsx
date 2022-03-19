import React from "react";
import { Button, Form } from "react-bootstrap";
import "./login.css";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <Form method="post">
        <input
          type="text"
          name="u"
          placeholder="Username"
          required="required"
        />
        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required"
        />
        <Button type="submit" class="btn btn-primary btn-block btn-large">
          Let me in.
        </Button>
      </Form>
    </>
  );
}

export default Login;
