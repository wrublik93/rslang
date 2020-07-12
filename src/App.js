import React, { useEffect } from "react";

import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import { routeNamesMap } from "constants/constants";

import Header from "components/Header";
import Footer from "components/Footer";
import Main from "components/Main";

import Registration from "pages/Registration";
import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import Vocabulary from "pages/Vocabulary";
import Statistic from "pages/Statistic";
import SpeakIt from "pages/SpeakIt";
import EnglishPuzzle from "pages/EnglishPuzzle";
import Savanna from "pages/Savanna";
import AudioChallenge from "pages/AudioChallenge";

import OurCustomGame from "pages/OurCustomGame";
import PageNotFound from "pages/PageNotFound";
import Sprint from "pages/Sprint";
import GamesPage from "pages/GamesPage";

const handleChange = (routeName) => {
  if (routeName) {
    document.title = routeNamesMap[routeName];
  }
};

export default function App() {
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
          <Route path="/404" component={PageNotFound} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </>
  );
}
