import CHART_WIDGET_ACTION_TYPES from "./chart_widget_action_types";

export const chartWidgetProcess = (data) => ({
    type: CHART_WIDGET_ACTION_TYPES.CHART_WIDGET_ADD_PROCESS,
    payload:data
})

export const chartWidgetGetProcess = (id) => ({
    type: CHART_WIDGET_ACTION_TYPES.CHART_WIDGET_GET_PROCESS,
    payload:id
})

export const chartWidgetDeleteProcess = (id) => ({
    type: CHART_WIDGET_ACTION_TYPES.CHART_WIDGET_DELETE_PROCESS,
    payload:id
})

export const chartWidgetResetProcess = () => ({
    type: CHART_WIDGET_ACTION_TYPES.CHART_WIDGET_RESET_PROCESS,
})

export const chartWidgetUpdateProcess = (data) => ({
    type: CHART_WIDGET_ACTION_TYPES.CHART_WIDGET_UPDATE_PROCESS,
    payload:data
})


