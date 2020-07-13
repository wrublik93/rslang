import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

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

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route path="/home" component={Home} />
          <Route path="/games" component={GamesPage} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/vocabulary" component={Vocabulary} />
          <Route path="/statistic" component={Statistic} />
          <Route path="/speakIt" component={SpeakIt} />
          <Route path="/englishPuzzle" component={EnglishPuzzle} />
          <Route path="/savanna" component={Savanna} />
          <Route path="/audioChallenge" component={AudioChallenge} />
          <Route path="/sprint" component={Sprint} />
          <Route path="/ourCustomGame" component={OurCustomGame} />
          <Route path="/englishTest" component={EnglishTest} />
          <Route path="/guess" component={GuessCard} />
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
