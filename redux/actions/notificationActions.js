import { toast } from "react-toastify";

import { MAIN_API_URL } from "../../constants";
import { apiCall } from "../../utils/apiCall";
import { FETCHING_NOTIFICATIONS_STATUS, FETCHING_NOTIFICATIONS_SUCCESS, IS_FAILED, START_FETCHING_NOTIFICATIONS } from "./actionTypes";

export const getNotifications = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: START_FETCHING_NOTIFICATIONS,
        });
        try {
            const notifications = await apiCall(MAIN_API_URL + 'notifications/pull')
            notifications.sort((a, b) => a.payload?.created_at - b.payload?.created_at);

            if (notifications) {
                dispatch({
                    type: FETCHING_NOTIFICATIONS_SUCCESS,
                    payload: notifications.reverse(),
                });
            } else {
                dispatch({
                    type: FETCHING_NOTIFICATIONS_STATUS,
                    payload: IS_FAILED
                });
            }
        } catch (err) {
            dispatch({
                type: FETCHING_NOTIFICATIONS_STATUS,
                payload: IS_FAILED
            });
            toast.error('Error fetching notifications', { toastId: 'fetchnotificationerror' });
        }
    };
};

export const markAsRead = async (ids) => {
    try {
        const res = await apiCall(MAIN_API_URL + 'notifications/read_many', {
            method: "patch",
            "Content-Type": "application/json",
            data: { ids },
        })

        if (res) {
            return res
        } else {
            throw "error marking as read"
        }
    } catch (err) {
        console.log(err)
    }
};