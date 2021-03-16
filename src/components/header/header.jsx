import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {withRouter} from "react-router-dom";

import ROUTING from "../routes/routings";

import MainMenu from "../menu/menu";

import headerStyles from "./header.styles";



const Header = ({history}) => {
    const styleClasses = headerStyles();

    return (
       <div className={styleClasses.headerMain}>
            <AppBar>
            <Toolbar>
                <Typography variant="h6" className={styleClasses.title} onClick={() => history.push(ROUTING.home)}>BI Analytics</Typography>
                <div className={styleClasses.space}></div>
                <MainMenu/>
            </Toolbar>
        </AppBar>
       </div>

    )
}
export default withRouter(Header);