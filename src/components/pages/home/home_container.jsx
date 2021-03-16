import React from "react";
import {connect} from "react-redux";

import Home from "./home";
import WithSpinnerHOC from "../../base/with_spinner_hoc/with_spinner";

import {dashboardSummeryProcess, dashboardChartProcess} from "../../../redux/dashboard/dashboard_actions"


const WrappedComponent = WithSpinnerHOC(Home)


class HomeContainer extends React.Component{
    componentDidMount() {
        this.props.dashboardSummeryProcess(this.props.summeries)
        this.props.dashboardChartProcess(this.props.charts)
    }

    render() {
        return (
            <WrappedComponent {...this.props}/>
        );
    }
}

const mapStateToProps = ({dashboard, summeryWidget, chartWidget}) => {
    return {
        isLoading: dashboard.isLoading,
        summeryData: dashboard.summeryData,
        chartData: dashboard.chartData,
        summeries: summeryWidget.summeries,
        charts: chartWidget.charts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         dashboardSummeryProcess: (summeries) => dispatch(dashboardSummeryProcess(summeries)),
         dashboardChartProcess: (charts) => dispatch(dashboardChartProcess(charts)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
