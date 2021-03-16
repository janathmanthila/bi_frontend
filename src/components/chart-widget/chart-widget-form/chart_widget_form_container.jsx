import React from "react";
import {connect} from "react-redux";
import uuid from 'react-uuid'

import ChartWidgetForm from "./chart_widget_form";
import WithSpinnerHOC from "../../base/with_spinner_hoc/with_spinner";

import {chartWidgetProcess, chartWidgetGetProcess, chartWidgetResetProcess, chartWidgetUpdateProcess} from "../../../redux/chart-widget/chart_widget_actions"


const WrappedComponent = WithSpinnerHOC(ChartWidgetForm)
const INIT_DATA = {
    id:null,
    name: '',
    type: null,
    subjects: [],
    years: [2000,2010],
    grades: [1,12],
    semesters: [],
    students: [],
}


class ChartWidgetFormContainer extends React.Component{
    constructor() {
        super();

        this.state = {
            chart: INIT_DATA
        }
    }

    onChange = (key, value) => {
        this.setState({[key]: value})
    }

    onReset = () => {
        this.setState({chart: INIT_DATA})

    }

    onHide = () => {
        this.props.chartWidgetResetProcess();
        this.props.onHide();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.widgetId !== this.props.widgetId){
            if (this.props.widgetId !== null){
                this.props.chartWidgetGetProcess(this.props.widgetId);
            }else{
                this.setState({chart: INIT_DATA})
            }
        }

        if (prevProps.chart !== this.props.chart){
            if (this.props.chart !== null){
                this.setState({chart: this.props.chart});
            }else{
                this.setState({chart: INIT_DATA})
            }
        }

    }


    render() {

        return (
            <WrappedComponent {...this.props} {...this.state} onHide={this.onHide} changeState={this.onChange} resetState={this.onReset}/>
        );
    }
}

const mapStateToProps = ({chartWidget}) => {
    return {
        chart: chartWidget.chart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chartWidgetProcess: (data) => dispatch(chartWidgetProcess(data)),
        chartWidgetGetProcess: (id) => dispatch(chartWidgetGetProcess(id)),
        chartWidgetResetProcess: () => dispatch(chartWidgetResetProcess()),
        chartWidgetUpdateProcess: (data) => dispatch(chartWidgetUpdateProcess(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartWidgetFormContainer);
