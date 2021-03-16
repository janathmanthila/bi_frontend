import React from "react";
import {connect} from "react-redux";

import CreateData from "./create_data";
import WithSpinnerHOC from "../base/with_spinner_hoc/with_spinner";

import {createDataProcess} from "../../redux/create-data/create_data_actions";

const WrappedComponent = WithSpinnerHOC(CreateData)


class CreateDataContainer extends React.Component{
    render() {
        return (
            <WrappedComponent {...this.props}/>
        );
    }
}

const mapStateToProps = ({createData}) => {
    return {
        isLoading: createData.isLoading,
        errorMessage: createData.errorMessage,
        successMessage: createData.successMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDataProcess: () => dispatch(createDataProcess()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDataContainer);
