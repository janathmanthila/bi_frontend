import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from "@material-ui/core/Select";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import uuid from "react-uuid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const ChartWidgetForm = ({onHide, show, chart, changeState, resetState, chartWidgetProcess, create, chartWidgetUpdateProcess}) => {

    const [students, setStudents] = useState([])
    // load student data
    useEffect( () => {
        axios.get(`student/`)
            .then(response => {
                setStudents(response.data)
            })

    }, [])

    const onChange = (name, value) =>{
        changeState("chart", {...chart, [name]: value})
    }

    const addChart = () => {
        chartWidgetProcess({...chart, id:uuid()});
        resetState();
        onHide();
    }

    const editChart = () => {
        chartWidgetUpdateProcess({id:chart.id, data:chart});
        resetState();
        onHide();
    }

    return (
        <Dialog onClose={onHide} aria-labelledby="alert-dialog" open={show} fullWidth>
            <DialogTitle >Add Chart</DialogTitle>
            <DialogContent dividers >
                <form noValidate autoComplete="off">
                    <div >
                        <FormControl style={{width:"100%"}}>
                            <TextField
                                id="chart-name"
                                label="Name"
                                value={chart.name}
                                onChange={(e) => onChange('name', e.target.value)}
                            >
                            </TextField>
                        </FormControl>

                        <FormControl style={{width:"100%"}}>
                            <TextField
                                id="chart-type"
                                select
                                label="Chart Type"
                                value={chart.type}
                                onChange={(e) => onChange('type', e.target.value)}
                            >
                                <MenuItem key="lineBar" value="Line and Bar">
                                    Line and Bar Chart
                                </MenuItem>
                                <MenuItem key="multiBar" value="Mulitiple Bar">
                                    Multiple Bar Chart
                                </MenuItem>
                            </TextField>
                        </FormControl>

                        {chart.type === "Line and Bar" &&
                        <FormControl  style={{width:"100%"}}>
                            <InputLabel id="subject-select-lable">Subjects</InputLabel>
                            <Select
                                labelId="subject-select-lable"
                                id="subject-select"
                                multiple
                                value={chart.subjects}
                                onChange={(e) => onChange('subjects', e.target.value)}
                                input={<Input />}
                            >
                                <MenuItem key="maths" value="Maths">
                                    Maths
                                </MenuItem>
                                <MenuItem key="science" value="Science">
                                    Science
                                </MenuItem>
                                <MenuItem key="it" value="IT">
                                    Information Technology
                                </MenuItem>
                            </Select>
                        </FormControl>
                        }
                        <div >
                            <FormControl required style={{width:"100%"}}>
                                <InputLabel id="student-select-lable">Students</InputLabel>
                                <Select
                                    labelId="student-select-lable"
                                    id="student-select"
                                    multiple
                                    value={chart.students}
                                    onChange={(e) => onChange('students', e.target.value)}
                                    input={<Input />}
                                >
                                    {students.map(student => (
                                        <MenuItem key={student.id} value={student.id}>
                                            {student.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <br/>

                            </FormControl>
                            <FormControl style={{width:"100%"}}>
                                <Typography id="year-slider" gutterBottom>
                                    Years
                                </Typography>
                                <Slider
                                    value={chart.years}
                                    min={2001}
                                    step={1}
                                    max={2010}
                                    onChange={(e, newValue) => onChange('years', newValue)}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="year-slider"
                                />
                            </FormControl>
                            <FormControl style={{width:"100%"}}>
                                <Typography id="grade-slider" gutterBottom>
                                    Grades
                                </Typography>
                                <Slider
                                    value={chart.grades}
                                    min={1}
                                    step={1}
                                    max={12}
                                    onChange={(e, newValue) => onChange('grades', newValue)}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="grade-slider"
                                />
                            </FormControl>

                             <FormControl required style={{width:"100%"}}>
                                        <InputLabel id="semester-select-lable">Semesters</InputLabel>
                                        <Select
                                            labelId="semester-select-lable"
                                            id="semester-select"
                                            multiple
                                            value={chart.semesters}
                                            onChange={(e) => onChange('semesters', e.target.value)}
                                            input={<Input />}
                                        >
                                            <MenuItem key="1" value="1">
                                                1
                                            </MenuItem>
                                            <MenuItem key="2" value="2">
                                                2
                                            </MenuItem>
                                        </Select>

                                    </FormControl>
                        </div>

                    </div>
                </form>
            </DialogContent>
            <hr/>
            <DialogActions>
                <Button variant="contained" color="primary" disableElevation onClick={create ? addChart: editChart}>
                    {create ? "Add": "Update"}
                </Button>
                <Button variant="contained" color="secondary" disableElevation onClick={onHide}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ChartWidgetForm;