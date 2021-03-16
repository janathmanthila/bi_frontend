import CREATE_DATA_ACTION_TYPES from "./create_data_action_types";

const INITIAL_STATE = {
    isLoading:false,
    errorMessage: null,
    successMessage: null,
}

const CreateDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_DATA_ACTION_TYPES.CREATE_DATA_INITIATE:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
                successMessage: null,
            }
        case CREATE_DATA_ACTION_TYPES.CREATE_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
                successMessage: null,
            }
        case CREATE_DATA_ACTION_TYPES.CREATE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                successMessage: action.payload,
            }
        default:
            return state
    }
}

export default CreateDataReducer;