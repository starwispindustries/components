import { AUTH_API_URL } from "../constants";
import { apiCall } from "../utils/apiCall";

export const logout = async () => {
  try {
    const res = await apiCall(AUTH_API_URL + "logout", {
      method: "post",
      data: {
        "token_str": []
      }
    });

    if (res === undefined) {
      throw "error logging out";
    }

    return res;
  } catch (err) {
    throw err;
  }
};
