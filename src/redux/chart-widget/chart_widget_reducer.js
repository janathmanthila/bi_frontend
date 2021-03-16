import CHART_WIDGET_ACTION_TYPES from "./chart_widget_action_types";
import {getChartWidget, deleteChartWidget, updateChartWidget} from './chart_widget_utils';

const INITIAL_STATE = {
    charts: [],
    chart: null,
}

const ChartWidgetReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHART_WIDGET_ACTION_TYPES.CHART_WIDGET_ADD_PROCESS:
            return {
                ...state,
                charts: [...state.charts, action.payload],
            }
        case CHART_WIDGET_ACTION_TYPES.CHART_WIDGET_GET_PROCESS:
            return {
                ...state,
                chart: getChartWidget(action.payload, state.charts)
            }
        case CHART_WIDGET_ACTION_TYPES.CHART_WIDGET_RESET_PROCESS:
            return {
                ...state,
                chart: null
            }
        case CHART_WIDGET_ACTION_TYPES.CHART_WIDGET_DELETE_PROCESS:
            return {
                ...state,
                charts: deleteChartWidget(action.payload, state.charts)
            }
        case CHART_WIDGET_ACTION_TYPES.CHART_WIDGET_UPDATE_PROCESS:
            return {
                ...state,
                charts: updateChartWidget(action.payload.id, action.payload.data, state.charts)
            }
        default:
            return state
    }
}

export default ChartWidgetReducer;