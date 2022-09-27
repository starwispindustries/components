import feed from "../Icons/Notifications/feed";
import materials from "../Icons/Notifications/materials";
import notification from "../Icons/Notifications/notification";
import poll from "../Icons/Notifications/poll";
import timeline from "../Icons/Notifications/timeline";
import attendance from "../Icons/Notifications/attendance";
import classroom from "../Icons/Notifications/classroom";
import lectures from "../Icons/Notifications/lectures";
import meet from "../Icons/Notifications/meet";
import members from "../Icons/Notifications/members";
import assignment from "../Icons/Notifications/assignment";

export const FEED_COLOR = "#7CB342";
export const MATERIAL_COLOR = "#A01F62";
export const ASSIGNMENT_COLOR = "#D88100";
export const POLL_COLOR = "#103E91";
export const MEET_COLOR = "#F96D15";
export const TIMELINE_COLOR = "#23C88C";
export const LECTURES_COLOR = "#27ABBD";
export const ATTENDANCE_COLOR = "#AD0000";
export const OTHERS_COLOR = "#733D47";
export const MEMBERS_COLOR = "#DC1010";
export const CLASSROOM_COLOR = "#05A660";

export const NOTIFICATION_TYPES = {
  0: {
    type: "classrooms",
    color: CLASSROOM_COLOR,
    icon: classroom,
  },
  1: {
    type: "feed",
    color: FEED_COLOR,
    icon: feed,
  },
  2: {
    type: "members",
    color: MEMBERS_COLOR,
    icon: members,
  },
  3: {
    type: "materials",
    color: MATERIAL_COLOR,
    icon: materials,
  },
  4: {
    type: "assignments",
    color: ASSIGNMENT_COLOR,
    icon: assignment,
  },
  5: {
    type: "polls",
    color: POLL_COLOR,
    icon: poll,
  },
  6: {
    type: "draft",
    color: OTHERS_COLOR,
    icon: notification,
  },
  7: {
    type: "meet",
    color: MEET_COLOR,
    icon: meet,
  },
  8: {
    type: "timeline",
    color: TIMELINE_COLOR,
    icon: timeline,
  },
  9: {
    type: "attendance",
    color: ATTENDANCE_COLOR,
    icon: attendance,
  },
  10: {
    type: "lectures",
    color: LECTURES_COLOR,
    icon: lectures,
  },
  11: {
    type: "alerts",
    color: OTHERS_COLOR,
    icon: notification,
  },
  12: {
    type: "reminders",
    color: OTHERS_COLOR,
    icon: notification,
  },
  13: {
    type: "general",
    color: OTHERS_COLOR,
    icon: notification,
  },
  14: {
    type: "advertisement",
    color: OTHERS_COLOR,
    icon: notification,
  },
  15: {
    type: "others",
    color: OTHERS_COLOR,
    icon: notification,
  },
};
