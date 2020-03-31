import React from "react";
import {Route, Switch, Redirect} from "react-router";
import Home from "./Home";
import WaypointsUI from "./Waypoints/WaypointsUI";
import Directions from "./Directions/Directions";
import About from "./About";

export default function Main() {
    return (
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/waypoints'} component={WaypointsUI} />
            <Route path={'/directions'} component={Directions} />
            <Route path={'/about'} component={About} />
            <Redirect to={'/'} />
        </Switch>
    );
}
