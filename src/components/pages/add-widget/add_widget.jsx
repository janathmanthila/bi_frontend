import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {withRouter} from "react-router-dom";

import ROUTING from "../../routes/routings";

import addWidgetStyles from "./add_widget.styles";

const AddWidget = ({history}) => {
    const styleClasses = addWidgetStyles();
    return (
        <div>
            <Grid container spacing={5}>
                <Grid item xs={6}>


                    <Paper className={styleClasses.paper} onClick={() => history.push(ROUTING.chart)}>
                        <Card className={styleClasses.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={styleClasses.image}
                                    image="https://www.iconpacks.net/icons/1/free-bar-chart-icon-675-thumb.png"
                                    title="Chart Widget"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Chart Widget
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Chart widget contains analytic graphical charts. It helps to make decisions in context level.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Paper>

                </Grid>
                <Grid item xs={6}>

                    <Paper className={styleClasses.paper} onClick={() => history.push(ROUTING.summery)}>
                        <Card className={styleClasses.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={styleClasses.image}
                                    image="https://icon-library.com/images/999-512.png"
                                    title="Chart Widget"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Summery Widget
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Summery widget is a value based widget. Can be used to analyse and making value based decisions.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}

export default withRouter(AddWidget);