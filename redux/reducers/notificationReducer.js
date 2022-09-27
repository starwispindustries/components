import { FETCHING_NOTIFICATIONS_STATUS, FETCHING_NOTIFICATIONS_SUCCESS, START_FETCHING_NOTIFICATIONS, IS_LOADING, IS_NOT_INITIATED, IS_SUCCESS } from '../actions/actionTypes';

const DEFAULT_STATE = {
    notifications: [],
    fetchStatus: IS_LOADING
};

const NotificationReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case START_FETCHING_NOTIFICATIONS:
            return {
                ...state,
            };
        case FETCHING_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.payload,
                fetchStatus: IS_SUCCESS,
            };
        case FETCHING_NOTIFICATIONS_STATUS:
            return {
                ...state,
                fetchStatus: action.payload,
            };
        default:
            return state;
    }
};

export default NotificationReducer;
