import React from "react";
import {connect} from "react-redux";

import SummeryWidgetForm from "./summery_widget_form";
import WithSpinnerHOC from "../../base/with_spinner_hoc/with_spinner";

import {summeryWidgetProcess, summeryWidgetGetProcess, summeryWidgetResetProcess, summeryWidgetUpdateProcess} from "../../../redux/summery-widget/summery_widget_actions"


const WrappedComponent = WithSpinnerHOC(SummeryWidgetForm)
const INIT_DATA = {
    id:null,
    years: [2001,2010],
    grades: [1,12],
    subjects: [],
    semesters: [],
    students: [],
    field: null,
}


class SummeryWidgetFormContainer extends React.Component{
    constructor() {
        super();

        this.state = {
            summery: INIT_DATA
        }
    }

    onChange = (key, value) => {
        this.setState({[key]: value})
    }

    onReset = () => {
        this.setState({summery: INIT_DATA})

    }

    onHide = () => {
        this.props.summeryWidgetResetProcess();
        this.props.onHide();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.widgetId !== this.props.widgetId){
            if (this.props.widgetId !== null){
                this.props.summeryWidgetGetProcess(this.props.widgetId);
            }else{
                this.setState({summery: INIT_DATA})
            }
        }

        if (prevProps.summery !== this.props.summery){
            if (this.props.summery !== null){
                this.setState({summery: this.props.summery});
            }else{
                this.setState({summery: INIT_DATA})
            }
        }

    }


    render() {

        return (
            <WrappedComponent {...this.props} {...this.state} onHide={this.onHide} changeState={this.onChange} resetState={this.onReset}/>
        );
    }
}

const mapStateToProps = ({summeryWidget}) => {
    return {
        summery: summeryWidget.summery,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        summeryWidgetProcess: (data) => dispatch(summeryWidgetProcess(data)),
        summeryWidgetGetProcess: (id) => dispatch(summeryWidgetGetProcess(id)),
        summeryWidgetResetProcess: () => dispatch(summeryWidgetResetProcess()),
        summeryWidgetUpdateProcess: (data) => dispatch(summeryWidgetUpdateProcess(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummeryWidgetFormContainer);
