import {makeStyles} from "@material-ui/core";

const headerStyles = makeStyles((theme) => ({
  headerMain: {
    flexGrow: 1,
  },
  title: {
    // flexGrow: 1,
    cursor:"pointer"
  },
  space: {
    flexGrow: 1,
  },
}));

export default headerStyles;