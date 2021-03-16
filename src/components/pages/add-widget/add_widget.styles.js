import {makeStyles} from "@material-ui/core";

const addWidgetStyles = makeStyles(() => ({
    paper: {
        display:"flex",
        justifyContent:"center",
        cursor: "pointer",
        width:"100%",


        "&:hover": {
            transform: "scale(1.1,1.1)",
            transition: "all 0.3s ease-in-out",
        },
    },

    image: {
        height: 500,
        width:"100%",
        backgroundSize:"80% 80%",
    },

    card: {

        width:"100%",
        height:"100%",
        flexGrow:1,
        display:"flex"
    }

}));

export default addWidgetStyles;