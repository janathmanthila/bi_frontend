import DASHBOARD_ACTION_TYPES from "./dashboard_action_types";
import axios from "axios";


const dashboardInitiate = () => {
    return {
        type: DASHBOARD_ACTION_TYPES.DASHBOARD_INITIATE
    }
}
const dashboardFailed = (err) => ({
    type: DASHBOARD_ACTION_TYPES.DASHBOARD_FAILED,
    payload:err
})

const dashboardSuccess = (data) => ({
    type: DASHBOARD_ACTION_TYPES.DASHBOARD_SUCCESS,
    payload:data
})


export const dashboardSummeryProcess = (summeries) => {
    return (dispatch) =>  {
        dispatch(dashboardInitiate())
        axios.post(`student/dataset/fetch/summery/`, summeries)
            .then(response => {
                dispatch(dashboardSuccess({summeryData: response.data}));
            })
            .catch(error => {
                dispatch(dashboardFailed(error.response.data.detail));
            })
    };
}

export const dashboardChartProcess = (charts) => {
    return (dispatch) =>  {
        dispatch(dashboardInitiate())
        axios.post(`student/dataset/fetch/chart/`, charts)
            .then(response => {
                dispatch(dashboardSuccess({chartData: response.data}));
            })
            .catch(error => {
                dispatch(dashboardFailed(error.response.data.detail));
            })
    };
}