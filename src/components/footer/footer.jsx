import React from 'react';
import Grid from "@material-ui/core/Grid";

import footerStyles from "./footer.styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

const Footer = () => {
    const styleClasses = footerStyles();
    return (
        <AppBar className={styleClasses.footerMainDiv}>
            <Toolbar>
                <Grid container md={12} justify="space-between" spacing={5}>
                    <Grid item md={4}>asdsad</Grid>
                    <Grid item md={4}>dasda</Grid>
                    <Grid item md={4}>dasda</Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    )
}
export default Footer;