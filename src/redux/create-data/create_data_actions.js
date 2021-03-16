import CREATE_DATA_ACTION_TYPES from "./create_data_action_types";
import axios from "axios";


const createDataInitiate = () => {
    return {
        type: CREATE_DATA_ACTION_TYPES.CREATE_DATA_INITIATE
    }
}
const createDataFailed = (err) => ({
    type: CREATE_DATA_ACTION_TYPES.CREATE_DATA_FAILED,
    payload:err
})

const createDataSuccess = (data) => ({
    type: CREATE_DATA_ACTION_TYPES.CREATE_DATA_SUCCESS,
    payload:data
})


export const createDataProcess = () => {
    return (dispatch) =>  {
        dispatch(createDataInitiate())
        axios.post(`student/dataset/create/`)
            .then(response => {
                dispatch(createDataSuccess(response.data));
            })
            .catch(error => {
                dispatch(createDataFailed(error.response.data.detail));
            })
    };
}