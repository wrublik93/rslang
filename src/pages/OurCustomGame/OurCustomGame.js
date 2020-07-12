import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import StartScreen from "./components/StartScreen";
import MemoryGameContainer from "./components/MemoryGameContainer";
import "pages/OurCustomGame/style.scss";

const OurCustomGame = () => {
  const match = useRouteMatch().url;
  return (
    <div className="our-custom-game">
      <Switch>
        <Route exact path={`${match}/`}>
          <StartScreen link={`${match}/game`} />
        </Route>
        <Route path={`${match}/game`} component={MemoryGameContainer} />
      </Switch>
    </div>
  );
};

export default OurCustomGame;
