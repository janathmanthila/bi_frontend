import React, {useState} from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizRounded from "@material-ui/icons/MoreHorizRounded"
import {withRouter} from "react-router-dom";

import ROUTING from "../routes/routings";

import websiteMenuStyles from "./menu.styles";

const MainMenu = ({history}) => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const mobileMenuId = 'bi-app-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={mobileMoreAnchorEl}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={() => history.push(ROUTING.home)}>Dashboard</MenuItem>
            <MenuItem onClick={() => history.push(ROUTING.addWidget)}>Widgets</MenuItem>
            <MenuItem onClick={() => history.push(ROUTING.createData)}>Create Data Set</MenuItem>
        </Menu>
    );
    const styleClasses = websiteMenuStyles();
    return (
        <div className={styleClasses.sectionBoth}>
            <div className={styleClasses.sectionDesktop}>
                <MenuItem onClick={() => history.push(ROUTING.home)}>Dashboard</MenuItem>
                <MenuItem onClick={() => history.push(ROUTING.addWidget)}>Widgets</MenuItem>
                <MenuItem onClick={() => history.push(ROUTING.createData)}>Create Data Set</MenuItem>
            </div>
            <div>
                <div className={styleClasses.sectionMobile}>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={(e) =>handleMobileMenuOpen(e)}
                        color="inherit"
                    >
                        <MoreHorizRounded />
                    </IconButton>
                </div>
            </div>
            {renderMobileMenu}
        </div>
    )
}

export default withRouter(MainMenu);