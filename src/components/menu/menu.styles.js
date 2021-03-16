import {makeStyles} from "@material-ui/core";

const websiteMenuStyles = makeStyles((theme) => ({

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sectionBoth: {
    display: 'flex',
  }
}));

export default websiteMenuStyles;