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
import Slider from '@material-ui/core/Slider';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import uuid from "react-uuid";
import axios from "axios";

const SummeryWidgetForm = ({onHide, show, summery, changeState, resetState, summeryWidgetProcess, create, summeryWidgetUpdateProcess}) => {

    const [students, setStudents] = useState([])
    // load student data
    useEffect( () => {
        axios.get(`student/`)
            .then(response => {
                setStudents(response.data)
            })

    }, [])

    const onChange = (name, value) =>{
        changeState("summery", {...summery, [name]: value})
    }

    const addSummery = () => {
        summeryWidgetProcess({...summery, id:uuid()});
        resetState();
        onHide();
    }

    const editSummery = () => {
        summeryWidgetUpdateProcess({id:summery.id, data:summery});
        resetState();
        onHide();
    }

    return (
        <Dialog onClose={onHide} aria-labelledby="alert-dialog" open={show} fullWidth>
            <form noValidate autoComplete="off" onSubmit={e => alert('das')}>
                <DialogTitle >Add Summery</DialogTitle>
                <DialogContent dividers >
                    <div >
                        <FormControl required  style={{width:"100%"}}>
                            <InputLabel id="fsield-select-lable">Selected Field</InputLabel>
                            <Select
                                labelId="field-select-lable"
                                id="fsield-select"
                                value={summery.field}
                                onChange={(e) => onChange('field', e.target.value)}
                                input={<Input/>}
                                required="required"
                            >
                                <MenuItem key="Marks" value="Marks">
                                    Marks
                                </MenuItem>
                            </Select>
                            <br/>

                        </FormControl>
                        <FormControl required style={{width:"100%"}}>
                            <InputLabel id="student-select-lable">Students</InputLabel>
                            <Select
                                labelId="student-select-lable"
                                id="student-select"
                                multiple
                                value={summery.students}
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
                                value={summery.years}
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
                                value={summery.grades}
                                min={1}
                                step={1}
                                max={12}
                                onChange={(e, newValue) => onChange('grades', newValue)}
                                valueLabelDisplay="auto"
                                aria-labelledby="grade-slider"
                            />
                        </FormControl>

                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <FormControl required style={{width:"100%"}}>
                                    <InputLabel id="subject-select-lable">Subjects</InputLabel>
                                    <Select
                                        labelId="subject-select-lable"
                                        id="subject-select"
                                        multiple
                                        value={summery.subjects}
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

                            </Grid>
                            <Grid item md={6}>
                                <FormControl required style={{width:"100%"}}>
                                    <InputLabel id="semester-select-lable">Semesters</InputLabel>
                                    <Select
                                        labelId="semester-select-lable"
                                        id="semester-select"
                                        multiple
                                        value={summery.semesters}
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

                            </Grid>
                        </Grid>
                    </div>

                </DialogContent>
                <hr/>
                <DialogActions>
                    <Button variant="contained" color="primary" disableElevation onClick={create ? addSummery: editSummery}>
                        {create ? "Add": "Update"}
                    </Button>
                    <Button variant="contained" color="secondary" disableElevation onClick={onHide}>
                        Close
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default SummeryWidgetForm;