import React from "react";
import {Route, Switch, Redirect} from "react-router";
import Home from "./Home";
import WaypointsUI from "./Waypoints/WaypointsUI";
import Directions from "./Directions/Directions";

export default function Main() {
    return (
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/waypoints'} component={WaypointsUI} />
            <Route path={'/directions'} component={Directions} />
            <Redirect to={'/'} />
        </Switch>
    );
}
