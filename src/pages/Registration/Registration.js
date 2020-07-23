import "pages/Registration/style.scss";

import React, { useState } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";

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
  const [showModal, setShowModal] = useState(false);

  const wordsFeature = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/words-feature.png`;
  const onlineFeature = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/study-feature.png`;
  const gamesFeature = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/games-feature.png`;
  const nearFeature = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/near-feature.png`;
  const speakItGame = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/speak-it-game.png`;
  const englishPuzzleGame = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/english-puzzle-game.png`;
  const savannahGame = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/savannah-game.png`;
  const audioChallengeGame = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/audio-challenge-game.png`;
  const sprintGame = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/sprint-game.png`;
  const ourGame = `https://raw.githubusercontent.com/Alexey-Koren/
rslang/assets/assets/StartPage/our-game.png`;

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

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="registration">
        <div className="registration-buttons">
          <>
            <Button
              className="mr-3"
              variant="warning"
              onClick={() => {
                setShowModal(true);
                setIsChoosed(true);
                setIsRegistered(false);
              }}
            >
              Join now
            </Button>

            <Button
              variant="warning"
              onClick={() => {
                setShowModal(true);
                setIsChoosed(true);
                setIsRegistered(true);
              }}
            >
              Sign in
            </Button>
          </>
        </div>
        <div className="registration-container">
          <p className="registration-title">Learning English is interesting!</p>
          <p className="registration-description">
            Our application is based on an individual approach to each user.
            Learn English right here with language-learning games and
            activities.
          </p>
          <p>Join us and have some fun!</p>
        </div>
        {!!isChoosed && (
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{!isRegistered ? "Join" : "Sign in"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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

                <Button variant="warning" type="submit">
                  {!isRegistered ? "Join" : "Sign in"}
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </div>
      <div className="registration-features">
        <hr />
        <div className="registration-features-title">Features</div>
        <hr />
        <div className="registration-features-container">
          <div className="registration-features-words">
            <p className="registration-features-words-title">
              Learning new words
            </p>
            <img src={wordsFeature} width="120" alt="" />
            <p className="registration-features-words-description">
              In the application settings, the user can choose the intensity of
              the daily training. Learning word cards contain clues: word
              translation, pronunciation and example of use.
            </p>
          </div>
          <div className="registration-features-online">
            <p className="registration-features-online-title">Online</p>
            <img src={onlineFeature} width="120" alt="" />
            <p className="registration-features-online-description">
              Unlike offline courses, our language-learning games are always
              available.
            </p>
          </div>
          <div className="registration-features-online">
            <p className="registration-features-online-title">Games</p>
            <img src={gamesFeature} width="120" alt="" />
            <p className="registration-features-online-description">
              Games are very effective in training. They also influence your
              basic training updating the number of repetitions.
            </p>
          </div>
          <div className="registration-features-online">
            <p className="registration-features-online-title">Always near</p>
            <img src={nearFeature} width="120" alt="" />
            <p className="registration-features-online-description">
              We are always near! Wherever you are, in any free hour, start your
              training.
            </p>
          </div>
        </div>
      </div>
      <div className="registration-mini-games">
        <hr />
        <div className="registration-mini-games-title">Games</div>
        <hr />
        <div className="registration-features-container">
          <div className="registration-features-words">
            <p className="registration-features-words-title">Speak It</p>
            <img src={speakItGame} width="120" alt="" />
            <p className="registration-features-words-description">
              The game is designed to improve the skills of correct
              pronunciation of a word. This game improves the comprehension of
              English speech.
            </p>
          </div>
          <div className="registration-features-online">
            <p className="registration-features-online-title">English Puzzle</p>
            <img src={englishPuzzleGame} width="120" alt="" />
            <p className="registration-features-online-description">
              This game will teach you how to build sentences in English. Also
              you will get acquainted with the greatest works of art.
            </p>
          </div>
          <div className="registration-features-online">
            <p className="registration-features-online-title">Savannah</p>
            <img src={savannahGame} width="120" alt="" />
            <p className="registration-features-online-description">
              In this game you have to guess how the words are translated.
              Thanks to this, you expand your vocabulary.
            </p>
          </div>
          <div className="registration-features-online">
            <p className="registration-features-online-title">
              Audio Challenge
            </p>
            <img src={audioChallengeGame} width="120" alt="" />
            <p className="registration-features-online-description">
              With this game you will improve your listening comprehension of
              English.
            </p>
          </div>
          <div className="registration-features-online">
            <p className="registration-features-online-title">Sprint</p>
            <img src={sprintGame} width="120" alt="" />
            <p className="registration-features-online-description">
              Play for a while to know exactly how many words you can translate
              in a minute.
            </p>
          </div>
          <div className="registration-features-online">
            <p className="registration-features-online-title">Memory Game</p>
            <img src={ourGame} width="120" alt="" />
            <p className="registration-features-online-description">
              In this game you need to connect the translation card with the
              English word card.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
