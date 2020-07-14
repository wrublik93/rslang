import "pages/Registration/style.scss";

import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { createUser, loginUser } from "services/services";
import { settingUser, settingCookie } from "store/actions";
import { useCookies } from "react-cookie";

import eye from "assets/icons/eye.svg";
import eyeClosed from "assets/icons/look.svg";

const Registration = () => {
  const [isRegistered, setIsRegistered] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const [isChoosed, setIsChoosed] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [submitMessages, setSubmitMessages] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [userCookie, setUserCookie] = useCookies(["user"]);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSignin = async () => {
    setSubmitMessages(null);

    const res = await loginUser({
      email,
      password,
    });

    let messages;
    const authResult = {};

    if (res.status === 403) {
      messages = <Alert variant="danger">Incorrect password</Alert>;

      setSubmitMessages(messages);
    }

    if (res.status === 404) {
      messages = <Alert variant="danger">Email not found</Alert>;

      setSubmitMessages(messages);
    }

    if (res.status === 200) {
      const { refreshToken, token, userId } = await res.json();

      authResult.authStatus = true;
      authResult.email = email;
      authResult.refreshToken = refreshToken;
      authResult.token = token;
      authResult.userId = userId;

      messages = (
        <Alert variant="success">Successfully auth. Redirecting...</Alert>
      );

      setSubmitMessages(messages);

      setTimeout(() => {
        setUserCookie("user", authResult);
        settingUser(authResult);
        settingCookie(authResult);
      }, 2000);
    }
  };

  const handleLogin = async () => {
    setSubmitMessages(null);

    const res = await createUser({
      email,
      password,
    });

    let messages;
    const authResult = {};

    if (res.status === 422) {
      messages = <Alert variant="danger">Wrong login or password</Alert>;
    }

    if (res.status === 417) {
      messages = (
        <Alert variant="danger">Already registered. Redirecting...</Alert>
      );

      setTimeout(() => {
        setSubmitMessages(null);
      }, 1000);

      setIsRegistered(true);
    }

    if (res.status === 200) {
      authResult.authStatus = true;
      authResult.email = email;

      messages = (
        <Alert variant="success">Successfully registered. Redirecting...</Alert>
      );

      setSubmitMessages(messages);

      setTimeout(() => {
        setUserCookie("user", authResult);
        settingCookie(authResult);
        settingUser(authResult);
      }, 2000);
    }

    setSubmitMessages(messages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDataLoading(true);

    if (!isRegistered) {
      handleLogin();
    } else {
      handleSignin();
    }

    setDataLoading(false);
  };

  return (
    <>
      {!isChoosed && (
        <>
          <Button
            variant="primary"
            onClick={() => {
              setIsChoosed(true);
              setIsRegistered(false);
            }}
          >
            Join now
          </Button>

          <Button
            variant="primary"
            className="mt-3"
            onClick={() => {
              setIsChoosed(true);
              setIsRegistered(true);
            }}
          >
            Sign in
          </Button>
        </>
      )}

      {!!isChoosed && (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="d-flex">
              <Form.Control
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                minLength={8}
                required
                onChange={(e) => setPassword(e.currentTarget.value)}
              />

              {!passwordShown && (
                <Button
                  variant="outline-danger"
                  className="ml-2 bg-transparent"
                  onClick={togglePasswordVisiblity}
                >
                  <img
                    className="icon"
                    src={eye}
                    alt="Show password"
                    width="20px"
                  />
                </Button>
              )}

              {passwordShown && (
                <Button
                  variant="outline-success"
                  className="ml-2 bg-transparent"
                  onClick={togglePasswordVisiblity}
                >
                  <img
                    className="icon"
                    src={eyeClosed}
                    alt="Hide password"
                    width="20px"
                  />
                </Button>
              )}
            </div>
          </Form.Group>

          {!dataLoading && submitMessages}

          <Button variant="primary" type="submit">
            {!isRegistered ? "Join" : "Sign in"}
          </Button>
        </Form>
      )}
    </>
  );
};

export default Registration;
