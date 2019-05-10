const initialState = {
    apiData: {},
    inputValue: "",
    jobsToDisplay: []
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case "FETCH_APIDATA":
            newState.apiData = action.apiData;
            break;
        case "HANDLE_INPUT_CHANGE":
            newState.inputValue = action.value;
            newState.jobsToDisplay = [];
            break;
        case "HANDLE_CLICK_FILTER_RESULT":
            newState.jobsToDisplay = action.value;
            break;
        default:
            break;
    }

    return newState;
};

export default reducer;