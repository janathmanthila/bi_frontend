import {makeStyles} from "@material-ui/core";

const createDataStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        height:'100%'
    },
    title: {
        fontSize: 30,
    },
    titleDiv: {
        display: "flex",
        justifyContent: "center"
    },
    bodyDiv: {
         display: "flex",
        justifyContent: "center"
    },
    bodyMain: {
        padding: "1% 10%"
    },
    buttonContent: {
        display: "flex",
        justifyContent: "center"
    }

}));

export default createDataStyles;