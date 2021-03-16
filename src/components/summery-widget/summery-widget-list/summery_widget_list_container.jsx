import React from "react";
import {connect} from "react-redux";

import SummeryWidgetList from "./summery_widget_list";
import WithSpinnerHOC from "../../base/with_spinner_hoc/with_spinner";

import {summeryWidgetDeleteProcess} from "../../../redux/summery-widget/summery_widget_actions"


const WrappedComponent = WithSpinnerHOC(SummeryWidgetList)


class SummeryWidgetListContainer extends React.Component{
    render() {
        return (
            <WrappedComponent {...this.props}/>
        );
    }
}

const mapStateToProps = ({summeryWidget}) => {
    return {
        summeries: summeryWidget.summeries,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        summeryWidgetDeleteProcess: (id) => dispatch(summeryWidgetDeleteProcess(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SummeryWidgetListContainer);
