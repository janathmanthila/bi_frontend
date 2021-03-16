import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import HomeContainer from "../pages/home/home_container";
import CreateDataPage from "../pages/create-data/create_data";
import ChartWidgetListContainer from "../chart-widget/chart-widget-list/chart_widget_list_container";
import SummeryWidgetListContainer from "../summery-widget/summery-widget-list/summery_widget_list_container";
import AddWidgetContainer from "../pages/add-widget/add_widget_container";
import Error404 from "../base/404-error/404_error";

import ROUTING from "./routings";


const Router = () => (
    <Switch>
        <Route exact path={ROUTING.home}>
            <HomeContainer/>
        </Route>
        <Route exact path={ROUTING.createData}>
            <CreateDataPage/>
        </Route>
        <Route exact path={ROUTING.chart}>
            <ChartWidgetListContainer/>
        </Route>
        <Route exact path={ROUTING.summery}>
            <SummeryWidgetListContainer/>
        </Route>
        <Route exact path={ROUTING.addWidget}>
            <AddWidgetContainer/>
        </Route>
         <Route exact path={ROUTING.err404}>
            <Error404/>
        </Route>
        <Redirect to={ROUTING.err404} />
    </Switch>
)

export default Router;