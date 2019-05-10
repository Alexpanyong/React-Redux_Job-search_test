import { API_ENDPOINT } from '../constants/constant';
import { FETCH_APIDATA, HANDLE_INPUT_CHANGE, HANDLE_CLICK_FILTER_RESULT } from './types';

export const fetchApiData = () => (dispatch) => {
    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: FETCH_APIDATA,
                apiData: json
            });
            // console.log("Jobs fetched:", json.data.jobs);
        })
        .catch(
            () => {
                console.log("Fetch data failed");
            }
        )
};

export const handleInputChange = (val) => (dispatch) => {
    dispatch({
        type: HANDLE_INPUT_CHANGE,
        value: val
    });
};

export const handleClickFilterResult = (val) => (dispatch) => {
    dispatch({
        type: HANDLE_CLICK_FILTER_RESULT,
        value: val
    });
};