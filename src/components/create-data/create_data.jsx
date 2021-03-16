import React, {useState, Fragment} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import ConfirmBox from "../base/confirm-box/confirm_box";
import {Alert, AlertTitle} from '@material-ui/lab'

import createDataStyles from "./create_data.styles"
import {Link} from "react-router-dom";
import ROUTING from "../routes/routings";

const CreateData = ({createDataProcess, successMessage, errorMessage}) => {
    const [showReWriteConfirm, setShowReWriteConfirm] = useState(false)

    const onConfirm = () => {
        createDataProcess();
        setShowReWriteConfirm(false)
    }

    const styleClasses = createDataStyles()
    return (
        <Fragment>
            <Card className={styleClasses.root}>
                <CardContent>
                    <div className={styleClasses.titleDiv}>
                        <Typography className={styleClasses.title} color="textSecondary" gutterBottom>
                            Create Dummy Data
                        </Typography>
                    </div>
                    <div className={styleClasses.bodyDiv}>
                        <Card className={styleClasses.bodyMain} variant="outlined">
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    This request will delete existing dummy data and create new dataset for the analysis.
                                </Typography>
                            </CardContent>
                            <CardActions className={styleClasses.buttonContent}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    startIcon={<SaveIcon />}
                                    onClick={() => setShowReWriteConfirm(true)}
                                >
                                    Re-write Dataset
                                </Button>
                            </CardActions>
                            <br/>
                            {successMessage &&
                            <Alert severity="success">
                                <AlertTitle>Data Created Successfully</AlertTitle>
                            </Alert>
                            }
                            {errorMessage &&
                            <Alert severity="error">
                                <AlertTitle>Data Created Failed</AlertTitle>
                                <p>
                                    {errorMessage}
                                </p>
                            </Alert>
                            }
                        </Card>
                    </div>


                </CardContent>

            </Card>
            <ConfirmBox
                topic="Are You Sure ??"
                message="This will delete all the data and re-write the dataset again."
                show={showReWriteConfirm}
                onHide={() => setShowReWriteConfirm(false)}
                onConfirm={onConfirm}
                confirmButtonColor="primary"
            />
        </Fragment>

    )
}

export default CreateData;