import { FETCHING_NOTIFICATIONS_STATUS, FETCHING_NOTIFICATIONS_SUCCESS, START_FETCHING_NOTIFICATIONS, IS_LOADING, UPDATE_NOTIFICATION, IS_SUCCESS } from '../actions/actionTypes';

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
        case UPDATE_NOTIFICATION:
            const update_notification_id = action.payload;
            const new_notifications = [...state.notifications]
            const index_of_new_notification = new_notifications.findIndex(n => n?._id == update_notification_id)

            if (index_of_new_notification > -1) {
                new_notifications[index_of_new_notification].read = true
            }

            return {
                ...state,
                notifications: new_notifications
            }
        default:
            return state;
    }
};

export default NotificationReducer;
