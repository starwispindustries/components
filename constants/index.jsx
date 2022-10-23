export const CLASSROOM_API_URL =
  process.env.REACT_APP_CLASSROOM_API_URL ||
  "https://classrooms.api.edvora.me/";
export const TIMELINE_API_URL =
  process.env.REACT_APP_TIMELINE_API_URL || "https://timetable.api.edvora.me/";
export const MAIN_API_URL =
  process.env.REACT_APP_MAIN_API_URL || "https://main.api.edvora.me/";
export const AUTH_API_URL =
  process.env.REACT_APP_AUTH_API_URL || "https://auth.api.edvora.me/";
export const FILE_API_URL =
  process.env.REACT_APP_FILE_API_URL || "https://files.api.edvora.me/";
export const ENGINE_API_URL =
  process.env.REACT_APP_ROLES_API_URL || "https://engine.api.edvora.me/";
export const TOKEN_API_URL =
  process.env.REACT_APP_TOKEN_API_URL || "https://tokens.api.edvora.me/";

export const MAIN_URL =
  process.env.REACT_APP_MAIN_URL || "https://main.edvora.me/";
export const CLASSROOM_URL =
  process.env.REACT_APP_CLASS_URL || "https://classrooms.edvora.me/";
export const TIMELINE_URL =
  process.env.REACT_APP_TIMELINE_URL || "https://timeline.edvora.me/";
export const LECTURES_URL =
  process.env.REACT_APP_LECTURES_URL || "https://lectures.edvora.me/";

export const AGORA_APP_ID =
  process.env.REACT_APP_AGORA_APP_ID || "d7317e76e2374323823ada6aabcd8640";

export const RECORDING_BUCKET_NAME =
  process.env.REACT_APP_RECORDING_BUCKET_NAME || "";
export const RECORDING_BUCKET_ACCESS_KEY =
  process.env.REACT_APP_RECORDING_BUCKET_ACCESS_KEY || "";
export const RECORDING_BUCKET_SECRET_KEY =
  process.env.REACT_APP_RECORDING_BUCKET_SECRET_KEY || "";


// export const SUBSCRIPTION_NOT_FOUND = 201
// export const ROLE_NOT_FOUND = 202
// export const USER_ALREADY_VERIFIED = 203
// export const USER_ALREADY_EXISTS = 204
// export const DATA_NOT_FOUND = 205
// export const OTP_EXPIRED = 206
// export const INCORRECT_OTP = 207
// export const ATTEMPTS_OVER = 208
// export const INVALID_USERNAME = 209
// export const USERNAME_NOT_AVAILABLE = 210
// export const INVALID_PHONE = 211
// export const INVALID_EMAIL = 212
// export const PHONE_NOT_AVAILABLE = 213
// export const EMAIL_NOT_AVAILABLE = 214
// export const USER_NOT_FOUND = 215
// export const RESEND_TOO_SOON = 216
// export const INVALID_OTP_TYPE = 217
// export const INVALID_TOKEN = 218
// export const TOKEN_EXPIRED = 219
// export const SAME_VALUE = 220
// export const DIFFERENT_VALUE = 221
// export const INCORRECT_PASSWORD = 222
// export const WRONG_SESSION = 223
// export const NATIONALITY_NOT_FOUND = 224
// export const SESSION_NOT_FOUND = 225

export const ERROR_CODES = {
  201: "Subscription not found",
  202: "Role Not Found",
  203: "User already verified",
  204: "User already exists",
  205: "Data not found",
  206: "OTP expired",
  207: "Incorrect OTP",
  208: "Attempts Over",
  209: "Invalid username",
  210: "Username not available",
  211: "Invalid phone number",
  212: "Invalid email id",
  213: "Phone number not available",
  214: "Email not available",
  215: "User not found",
  216: "Resend too soon",
  217: "Invalid otp type",
  218: "Invalid token",
  219: "Token expired",
  220: "Same value",
  221: "Different value",
  222: "Incorrect password",
  223: "Wrong session",
  224: "Nationality not found",
  225: "Session not found"
}