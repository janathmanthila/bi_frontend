import SUMMERY_WIDGET_ACTION_TYPES from "./summery_widget_action_types";
import {getSummeryWidget, deleteSummeryWidget, updateSummeryWidget} from './summery_widget_utils';

const INITIAL_STATE = {
    summeries: [],
    summery: null,
}

const SummeryWidgetReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUMMERY_WIDGET_ACTION_TYPES.SUMMERY_WIDGET_ADD_PROCESS:
            return {
                ...state,
                summeries: [...state.summeries, action.payload],
            }
        case SUMMERY_WIDGET_ACTION_TYPES.SUMMERY_WIDGET_GET_PROCESS:
            return {
                ...state,
                summery: getSummeryWidget(action.payload, state.summeries)
            }
        case SUMMERY_WIDGET_ACTION_TYPES.SUMMERY_WIDGET_RESET_PROCESS:
            return {
                ...state,
                summery: null
            }
        case SUMMERY_WIDGET_ACTION_TYPES.SUMMERY_WIDGET_DELETE_PROCESS:
            return {
                ...state,
                summeries: deleteSummeryWidget(action.payload, state.summeries)
            }
        case SUMMERY_WIDGET_ACTION_TYPES.SUMMERY_WIDGET_UPDATE_PROCESS:
            return {
                ...state,
                summeries: updateSummeryWidget(action.payload.id, action.payload.data, state.summeries)
            }
        default:
            return state
    }
}

export default SummeryWidgetReducer;