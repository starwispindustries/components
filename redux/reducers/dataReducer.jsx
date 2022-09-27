import { FETCHING_FILE_DOWNLOAD_URL_SUCCESS } from "../actions/actionTypes";

const DEFAULT_STATE = {
  filesMetadata: [],
};

const DataReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    // Download Actions
    case FETCHING_FILE_DOWNLOAD_URL_SUCCESS:
      const existingFiles = state.filesMetadata;
      const payloadFile = action.payload;
      let tmpFiles = existingFiles;

      if (existingFiles.includes(payloadFile)) {
        tmpFiles = existingFiles.map((data) =>
          data.filekey === payloadFile.filekey
            ? { ...data, ...payloadFile.metadata }
            : data
        );
      } else {
        tmpFiles.push({
          filekey: payloadFile.filekey,
          ...payloadFile.metadata,
        });
      }

      return {
        ...state,
        filesMetadata: tmpFiles,
      };

    default:
      return state;
  }
};

export default DataReducer;
