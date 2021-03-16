import React, {useState, Fragment} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import ChartWidgetFormContainer from "../chart-widget-form/chart_widget_form_container";
import ConfirmBox from "../../base/confirm-box/confirm_box";

import chartWidgetStyles from "./chart_widget.styles";


const ChartWidgetList = ({charts, chartWidgetDeleteProcess}) => {
    const [showChartWidgetForm, setShowChartWidgetForm] = useState(false)
    const [showDeleteConfirm, setShowDeleteConfirm] = useState({status:false, id:null})
    const [showChartWidgetFormEdit, setShowChartWidgetFormEdit] = useState({status:false, id:null})

    const onConfirm = () => {
        chartWidgetDeleteProcess(showDeleteConfirm.id);
        setShowDeleteConfirm({status:false, id:null})
    }

    const styleClasses = chartWidgetStyles()
    return (
        <Fragment>
            <Card className={styleClasses.root}>
                <CardContent>
                    <div className={styleClasses.titleDiv}>
                        <Typography className={styleClasses.title} color="textSecondary" gutterBottom>
                            Chart Widgets
                        </Typography>
                    </div>
                    <div>
                        <Button className={styleClasses.addBtn} size="large" variant="contained" color="primary" onClick={() => setShowChartWidgetForm(true)}>Add Chart</Button><br/><br/>
                        <div className={styleClasses.bodyMain}>

                            <div className={styleClasses.bodyDiv}>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Years</TableCell>
                                                <TableCell>Subjects</TableCell>
                                                <TableCell>Grades</TableCell>
                                                <TableCell>Semesters</TableCell>
                                                <TableCell align="center">Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {charts.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell>{row.type}</TableCell>
                                                    <TableCell>{row.years.join(' - ')}</TableCell>
                                                    <TableCell>{row.subjects.join(', ')}</TableCell>
                                                    <TableCell>{row.grades.join(' - ')}</TableCell>
                                                    <TableCell>{row.semesters.join(', ')}</TableCell>
                                                    <TableCell align="right">
                                                        <IconButton color="primary" aria-label="Edit Record" component="span" onClick={() => setShowChartWidgetFormEdit({status:true, id: row.id})}>
                                                            <EditIcon />
                                                        </IconButton>
                                                        <IconButton color="secondary" aria-label="Delete Record" component="span" onClick={() => setShowDeleteConfirm({status:true, id: row.id})}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <ChartWidgetFormContainer onHide={() => setShowChartWidgetForm(false)} show={showChartWidgetForm} create={true}/>
            <ChartWidgetFormContainer onHide={() => setShowChartWidgetFormEdit({status:false, id:null})} show={showChartWidgetFormEdit.status} widgetId={showChartWidgetFormEdit.id}/>
            <ConfirmBox
                topic="Confirm Delete ??"
                message="Are you sure?"
                show={showDeleteConfirm.status}
                onHide={() => setShowDeleteConfirm({status:false, id:null})}
                onConfirm={onConfirm}
                confirmButtonColor="primary"
            />

        </Fragment>

    )
}

export default ChartWidgetList;