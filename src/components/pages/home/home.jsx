import React, {useEffect, useState} from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from "@material-ui/core/Grid";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";

import Chart from "../../chart/chart";

import homeStyles from "./home.styles";
import axios from "axios";

const Home = ({summeryData, chartData}) => {
    const [students, setStudents] = useState([])

    // load student data
    useEffect( () => {
        axios.get(`student/`)
            .then(response => {
                setStudents(response.data)
            })

    }, [])


    const styleClasses = homeStyles();
    return (
        <div>
            <Grid container spacing={2}>
                {summeryData.map(summery => (
                    <Grid item xs={4} justify="center">
                        <Card className={styleClasses.summeryMain}>
                            <CardHeader
                                title={summery.value}
                                className={styleClasses.summeryCount}
                            />
                            {students.length > 0 &&
                            <CardContent>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    {`Total ${summery.field} of ${summery.students.length > 1? summery.students.length : students.find(student => student.id === summery.students[0]).name} ${summery.students.length > 1 ? "students" : ""} in grade ${summery.grades.join(' to grade ')} in ${summery.subjects.join(', ')}.`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {`Year Range: ${summery.years.join(' - ')}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {`Semesters: ${summery.semesters.join(', ')}`}
                                </Typography>
                            </CardContent>
                            }
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <br/>
            <hr/>
            <br/>
            {chartData.map(chart => (
                <Chart series={chart.series} name={chart.name} yAxis={chart.yAxis} xAxis={chart.xAxis}/>
            ))}

        </div>
    )
}


export default Home;