import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import StartScreen from "./components/StartScreen";
import GameContainer from "./components/GameContainer";

import "pages/EnglishPuzzle/style.scss";

const EnglishPuzzle = () => {
  const match = useRouteMatch().url;
  return (
    <div className="english-puzzle">
      <Switch>
        <Route exact path={`${match}/`}>
          <StartScreen link={`${match}/game`} />
        </Route>
        <Route path={`${match}/game`} component={GameContainer} />
      </Switch>
    </div>
  );
};

export default EnglishPuzzle;
