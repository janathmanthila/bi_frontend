import React from "react";
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from "@material-ui/core/Toolbar";

import Router from "../routes/router";
import Header from "../header/header";
import Footer from "../footer/footer";



const Layout = () => (
    <div>
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <div>
                <CssBaseline />
                <Header/>
                <Toolbar />
            </div>

            <div style={{flex: "1"}}>
                <Box m={5}>
                    <Router/>
                </Box>
                <div style={{marginTop:"80px"}}>

                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    </div>
)

export default Layout;