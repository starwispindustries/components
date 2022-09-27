import { apiCall } from "../../../src/lib/apiCall";
import { FILE_API_URL } from "../../constants";
import {
  FETCHING_FILE_DOWNLOAD_URL_FAILED,
  FETCHING_FILE_DOWNLOAD_URL_SUCCESS,
  FETCHING_FILE_METADATA_FAILED,
  FETCHING_FILE_METADATA_SUCCESS,
  START_FETCHING_FILE_DOWNLOAD_URL,
  START_FETCHING_FILE_METADATA,
} from "./actionTypes";

export const fetchFileMetaData = (filekey) => {
  return async (dispatch, getState) => {
    if (!filekey) return;
    if (
      getState().commonData.filesMetadata.findIndex(
        (data) => data.filekey === filekey
      ) > -1
    ) {
      return;
    }

    dispatch({
      type: START_FETCHING_FILE_METADATA,
      payload: filekey,
    });

    let response;

    try {
      response = await apiCall(
        FILE_API_URL + "download/" + filekey + "/metadata",
        {
          method: "get",
        }
      );
    } catch (error) {
      dispatch({
        type: FETCHING_FILE_METADATA_FAILED,
        payload: filekey,
      });
    }

    if (response) {
      dispatch({
        type: FETCHING_FILE_METADATA_SUCCESS,
        payload: { metadata: { filekey, ...response } },
      });
    } else {
      dispatch({
        type: FETCHING_FILE_METADATA_FAILED,
        payload: filekey,
      });
    }
  };
};

export const fetchFileDownloadURL = (filekey) => {
  return async (dispatch, getState) => {
    if (!filekey) return;
    //first see if URL already fetched and not expired yet
    if (
      getState().commonData.filesMetadata.findIndex(
        (data) =>
          data?.filekey === filekey &&
          data?.download_url && // download url already fetched
          data?.download_url_expriration_time > Date.now() //not yet exprired
      ) > -1
    )
      return;
    // else fetch new one
    dispatch({
      type: START_FETCHING_FILE_DOWNLOAD_URL,
      payload: filekey,
    });

    let response;

    try {
      response = await apiCall(FILE_API_URL + "download/" + filekey, {
        method: "get",
      });
    } catch (error) {
      dispatch({
        type: FETCHING_FILE_DOWNLOAD_URL_FAILED,
        payload: filekey,
      });
    }

    if (response && response.url) {
      dispatch({
        type: FETCHING_FILE_DOWNLOAD_URL_SUCCESS,
        payload: {
          filekey,
          metadata: {
            filekey,
            download_url: response.url,
            download_url_expriration_time: Date.now() + 59 * 60 * 100, //timestamp of next hour
          },
        },
      });
    } else {
      dispatch({
        type: FETCHING_FILE_DOWNLOAD_URL_FAILED,
        payload: filekey,
      });
    }
  };
};
