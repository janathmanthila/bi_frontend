import React from "react";
import {connect} from "react-redux";

import ChartWidgetList from "./chart_widget_list";
import WithSpinnerHOC from "../../base/with_spinner_hoc/with_spinner";

import {chartWidgetDeleteProcess} from "../../../redux/chart-widget/chart_widget_actions"


const WrappedComponent = WithSpinnerHOC(ChartWidgetList)


class ChartWidgetListContainer extends React.Component{
    render() {
        return (
            <WrappedComponent {...this.props}/>
        );
    }
}

const mapStateToProps = ({chartWidget}) => {
    return {
        charts: chartWidget.charts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chartWidgetDeleteProcess: (id) => dispatch(chartWidgetDeleteProcess(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChartWidgetListContainer);
