import {makeStyles} from "@material-ui/core";

const homeStyles = makeStyles(() => ({

    summeryCount: {
        textAlign: "center",
        border: "1px solid black",
        borderRadius:"250px",
    },

    card: {

        width:"100%",
        height:"100%",
        flexGrow:1,
        display:"flex"
    }

}));

export default homeStyles;