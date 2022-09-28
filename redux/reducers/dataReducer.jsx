import {
    FETCHING_FILE_DOWNLOAD_URL_SUCCESS,
    PROFILE_FETCH_FAILED,
    PROFILE_FETCH_SUCCESS,
    START_PROFILE_FETCH,
} from "../actions/actionTypes";

const DEFAULT_STATE = {
    filesMetadata: [],
    profile: undefined,

    profileLoading: false,
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

        case PROFILE_FETCH_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                profileLoading: false,
            };

        case PROFILE_FETCH_FAILED:
            return {
                ...state,
                profileLoading: false,
            };

        case START_PROFILE_FETCH:
            return {
                ...state,
                profileLoading: true,
            };

        default:
            return state;
    }
};

export default DataReducer;
