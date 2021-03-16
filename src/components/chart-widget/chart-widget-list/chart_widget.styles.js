import {makeStyles} from "@material-ui/core";

const chartWidgetStyles = makeStyles(() => ({
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
        width:"80%",
        display: "flex",
        justifyContent: "center"
    },
    bodyMain: {
        display: "flex",
        justifyContent: "center",
    },
    buttonContent: {
        display: "flex",
        justifyContent: "center"
    },

    addBtn: {
        float:"right",
    }


}));

export default chartWidgetStyles;