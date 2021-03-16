import DASHBOARD_ACTION_TYPES from "./dashboard_action_types";

const INITIAL_STATE = {
    isLoading:false,
    summeryData:[],
    chartData:[],
}

const DashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DASHBOARD_ACTION_TYPES.DASHBOARD_INITIATE:
            return {
                ...state,
                isLoading: true,
            }
        case DASHBOARD_ACTION_TYPES.DASHBOARD_FAILED:
            return {
                ...state,
                isLoading: false,
            }
        case DASHBOARD_ACTION_TYPES.DASHBOARD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ...action.payload,
            }
        default:
            return state
    }
}

export default DashboardReducer;