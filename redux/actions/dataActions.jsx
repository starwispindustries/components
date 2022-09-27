import { FILE_API_URL } from "../../constants";
import {
  FETCHING_FILE_METADATA_FAILED,
  FETCHING_FILE_METADATA_SUCCESS,
  START_FETCHING_FILE_METADATA,
} from "./actionTypes";

export const fetchFileMetaData = (filekey) => {
  return async (dispatch, getState) => {
    if (!filekey) return;
    if (
      getState().data.filesMetadata.findIndex(
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
