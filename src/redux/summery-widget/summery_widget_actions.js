import SUMMERY_WIDGET_ACTION_TYPES from "./summery_widget_action_types";

export const summeryWidgetProcess = (data) => ({
    type: SUMMERY_WIDGET_ACTION_TYPES.SUMMERY_WIDGET_ADD_PROCESS,
    payload:data
})

export const summeryWidgetGetProcess = (id) => ({
    type: SUMMERY_WIDGET_ACTION_TYPES.SUMMERY_WIDGET_GET_PROCESS,
    payload:id
})

export const summeryWidgetDeleteProcess = (id) => ({
    type: SUMMERY_WIDGET_ACTION_TYPES.SUMMERY_WIDGET_DELETE_PROCESS,
    payload:id
})

export const summeryWidgetResetProcess = () => ({
    type: SUMMERY_WIDGET_ACTION_TYPES.SUMMERY_WIDGET_RESET_PROCESS,
})

export const summeryWidgetUpdateProcess = (data) => ({
    type: SUMMERY_WIDGET_ACTION_TYPES.SUMMERY_WIDGET_UPDATE_PROCESS,
    payload:data
})


