import React from "react";
import {connect} from "react-redux";

import AddWidget from "./add_widget";
import WithSpinnerHOC from "../../base/with_spinner_hoc/with_spinner";


const WrappedComponent = WithSpinnerHOC(AddWidget)


class AddWidgetContainer extends React.Component{
    render() {
        return (
            <WrappedComponent {...this.props}/>
        );
    }
}

const mapStateToProps = ({createData}) => {
    return {
        // isLoading: createData.isLoading,
        // errorMessage: createData.errorMessage,
        // successMessage: createData.successMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // createDataProcess: () => dispatch(createDataProcess()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWidgetContainer);
