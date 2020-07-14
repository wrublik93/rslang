import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useGlobalState } from "store/store";

import { routeNamesMap } from "constants/constants";

import Footer from "components/Footer";
import GuessCard from "components/GuessCard";
import Header from "components/Header";
import Main from "components/Main";

import AboutUs from "pages/AboutUs";
import AudioChallenge from "pages/AudioChallenge";
import EnglishPuzzle from "pages/EnglishPuzzle";
import Home from "pages/Home";
import OurCustomGame from "pages/OurCustomGame";
import PageNotFound from "pages/PageNotFound";
import Registration from "pages/Registration";
import Savanna from "pages/Savanna";
import SpeakIt from "pages/SpeakIt";
import Vocabulary from "pages/Vocabulary";
import Statistic from "pages/Statistic";

import Sprint from "pages/Sprint";
import EnglishTest from "pages/EnglishTest";
import GamesPage from "pages/GamesPage";

import "styles/styles.scss";

const handleChange = (routeName) => {
  if (routeName) {
    document.title = routeNamesMap[routeName];
  }
};

const App = () => {
  const history = useHistory();
  useEffect(() => {
    return history.listen((location) => {
      handleChange(location.pathname);
    });
  }, [history]);

  const [auth] = useGlobalState("auth");

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Registration}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/home" component={Home}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/games" component={GamesPage}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/aboutUs" component={AboutUs}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/vocabulary" component={Vocabulary}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/statistic" component={Statistic}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/speakIt" component={SpeakIt}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/englishPuzzle" component={EnglishPuzzle}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/savanna" component={Savanna}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/audioChallenge" component={AudioChallenge}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/sprint" component={Sprint}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/ourCustomGame" component={OurCustomGame}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/englishTest" component={EnglishTest}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/guess" component={GuessCard}>
            {!auth.authStatus && <Registration />}
          </Route>

          <Route path="/404" component={PageNotFound} />

          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default App;
