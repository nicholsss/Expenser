import React, { useState, useEffect } from "react";
import { useField } from "../hooks/";
import { Button, Checkbox, Form } from "semantic-ui-react";
import loginService from "../services/login";
import MainPage from "./MainPage"

const LoginForm = props => {
  const [username, usernameReset] = useField("text");
  const [password, passwordReset] = useField("password");
  const [user, setUser] = useState(null);

  //Logging happens here
  const handleLogin = async event => {
    event.preventDefault();
    console.log("username", username.value);
    console.log("password", password.value);

    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      });

      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      setUser(user);
    } catch (error) {
      console.log("Errror");
    }
  };
  // if no user logged in show login form
  if (user === null) {
    return (
      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Username" {...username} />
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input placeholder="Password" {...password} />
        </Form.Field>
        <Button type="submit" onClick={handleLogin}>
          Submit
        </Button>
      </Form>
    );
  }
  return (
    <div>
      <MainPage/>
    </div>
  );
};
export default LoginForm;
