import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import footerStyles from "./footer.styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

const Footer = () => {
    const styleClasses = footerStyles();
    return (
        <AppBar className={styleClasses.footerMainDiv}>
            <Toolbar>
                <Grid container md={12} justify="space-between" spacing={5}>
                    <Grid item md={4}><Typography variant="h5">BI ANALYTICS</Typography></Grid>
                    <Grid item md={4}><Typography variant="p">BI Analytics is an customizable analysis tool developed to provide an assistance in decision making processors. </Typography></Grid>
                    <Grid item md={4}><Typography variant="p">2021 © BI Analytics, All Rights Reserved.</Typography></Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    )
}
export default Footer;