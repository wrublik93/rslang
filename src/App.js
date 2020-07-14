import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useGlobalState } from "store/store";
import { settingCookie } from "store/actions";
import { useCookies } from "react-cookie";

import { routeNamesMap } from "constants/constants";

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

  const [userStore, setUserStore] = useGlobalState("user");
  const [userCookie] = useCookies("user");

  useEffect(() => {
    if (userCookie.user) {
      const { user } = userCookie;

      settingCookie(user);
      setUserStore(user);
    }

    return history.listen((location) => {
      handleChange(location.pathname);
    });
  }, [history, userCookie, setUserStore]);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Registration}>
            {!userStore.authStatus ? <Registration /> : <Redirect to="/home" />}
          </Route>

          <Route path="/home" component={Home}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/games" component={GamesPage}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/aboutUs" component={AboutUs}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/vocabulary" component={Vocabulary}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/statistic" component={Statistic}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/speakIt" component={SpeakIt}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/englishPuzzle" component={EnglishPuzzle}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/savanna" component={Savanna}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/audioChallenge" component={AudioChallenge}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/sprint" component={Sprint}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/ourCustomGame" component={OurCustomGame}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/englishTest" component={EnglishTest}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/guess" component={GuessCard}>
            {!userStore.authStatus && <Registration />}
          </Route>

          <Route path="/404" component={PageNotFound} />

          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Main>
    </>
  );
};

export default App;
