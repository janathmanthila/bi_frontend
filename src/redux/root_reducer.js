import {combineReducers} from 'redux';

import CreateDataReducer from "./create-data/create_data_reducer";
import ChartWidgetReducer from "./chart-widget/chart_widget_reducer";
import SummeryWidgetReducer from "./summery-widget/summery_widget_reducer";
import DashboardReducer from "./dashboard/dashboard_reducer";

const rootReducer = combineReducers({
    createData: CreateDataReducer,
    chartWidget: ChartWidgetReducer,
    summeryWidget: SummeryWidgetReducer,
    dashboard: DashboardReducer,
});

export default rootReducer;