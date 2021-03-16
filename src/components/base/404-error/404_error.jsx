import React from 'react';
import {Alert, AlertTitle} from '@material-ui/lab'
import {Link} from 'react-router-dom';

import ROUTING from "../../routes/routings";

const Error404 = () => (
    <div>
        <Alert severity="error">
        <AlertTitle>404 - Page Not Found</AlertTitle>
        <p>
          Go <Link to={ROUTING.home}>HomePage</Link>
        </p>
      </Alert>
    </div>
)


export default Error404;