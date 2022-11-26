import React from "react";
import {
  HStack,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";

import {
  NOTIFICATION_TYPES,
  OTHERS_COLOR,
} from "../../constants/notifications";
import { hexToRgbString } from "../../utils";
import notification from "../../Icons/Notifications/notification";
import { markAsRead } from "../../redux/actions/notificationActions";
import { CLASSROOM_API_URL, CLASSROOM_URL, LECTURES_URL, TIMELINE_URL } from "../../constants";
import { apiCall } from "../../utils/apiCall";
import { INTERACT_POLLS, UPDATE_CLASS_ASSIGNMENTS, UPDATE_CLASS_POLLS } from "../../../src/constants";

const NotificationCard = ({
  id,
  content,
  date,
  classroomName,
  classroomId,
  type,
  read,
  setAsRead,
  actionPath,
  itemId,
  item,
}) => {
  const { colorMode } = useColorMode();

  const borderColor = useColorModeValue(
    "text.light.disabled",
    "text.dark.disabled"
  );

  let bgColor =
    NOTIFICATION_TYPES[type]?.color === undefined
      ? OTHERS_COLOR
      : NOTIFICATION_TYPES[type].color;
  bgColor = hexToRgbString(bgColor, colorMode == "light" ? 0.15 : 0.3);

  const onClick = async () => {

    const redirectionUrl = await getRedirectionUrl();

    if (redirectionUrl !== undefined) {
      window.open(redirectionUrl);
    }

    if (!read) {
      const res = await markAsRead([id]);
      if (res !== undefined) {
        setAsRead(id);
      }
    }
  };

  const getRedirectionUrl = async () => {
    if (classroomId == undefined && itemId == undefined) {
      return undefined;
    }

    const { payload } = item;

    if (payload?.kind >= 0) {
      switch (payload?.kind) {
        case 0:
          const classroom_id = payload?.classroom_id;

          const item_id = payload?.item_id;
          const action_path = payload?.action_path;

          let overview_attendance;
          if (action_path?.includes("overview") && action_path?.includes("attendance")) {
            overview_attendance = true
          }

          // overview attendance
          if (classroom_id && overview_attendance) {
            return `${TIMELINE_URL}attendance/overview?classroom_id=${classroom_id}`
          }

          break;

        case 1: {
          // for classroom/post 
          const classroom_id = payload?.classroom_id;

          const item_id = payload?.item_id;
          const action_path = payload?.action_path;

          // feed post
          const post_id = item_id[0];

          let feed_comments;
          if (action_path?.includes("comments")) {
            feed_comments = true;
          }

          // for feed comments
          if (feed_comments && classroom_id && post_id) {
            return `${CLASSROOM_URL}feed/post?classroom_id=${classroom_id}&post_id=${post_id}`
          }

          // for feed post
          if (classroom_id && post_id) {
            return `${CLASSROOM_URL}feed/post?classroom_id=${classroom_id}&post_id=${post_id}`
          }

          break;
        }

        case 2: {
          // for classroom/member 
          const classroom_id = payload?.classroom_id;

          // When member is added
          if (classroom_id) {
            return `${CLASSROOM_URL}overview?classroom_id=${classroom_id}`;
          }
          break
        }

        case 3: {
          // for classroom/materials 
          const classroom_id = payload?.classroom_id;
          const item_id = payload?.item_id;
          const action_path = payload?.action_path;

          const material_id = item_id[0];
          const material_type = action_path[0];

          if (classroom_id && material_id && material_type) {
            return `${CLASSROOM_URL}materials/preview?classroom_id=${classroomId}&material_id=${material_id}&type=${material_type}`;
          } else {
            return `${CLASSROOM_URL}materials?classroom_id=${classroom_id}`
          }
        }

        case 4: {
          // for classroom/assignment 
          const classroom_id = payload?.classroom_id;
          const item_id = payload?.item_id;

          const assingment_id = item_id[0];

          return `${CLASSROOM_URL}assignments/preview?classroom_id=${classroom_id}&assignment_id=${assingment_id}`
        }

        case 5: {
          // for classroom/poll
          const classroom_id = payload?.classroom_id;
          const item_id = payload?.item_id;

          // global permissions
          const { permissions } = await apiCall(CLASSROOM_API_URL + 'classroom/permissions/self', {}, { 'Classroom-Id': classroom_id })

          const poll_id = item_id[0]

          if (permissions?.includes(UPDATE_CLASS_POLLS) && poll_id) {
            return `${CLASSROOM_URL}polls/preview?classroom_id=${classroom_id}&poll_id=${poll_id}`
          }

          if (permissions?.includes(INTERACT_POLLS) && poll_id) {
            return `${CLASSROOM_URL}polls/submit?classroom_id=${classroom_id}&poll_id=${poll_id}`
          }

          break
        }

        case 6: {
          // for classroom/draft
          const classroom_id = payload?.classroom_id;
          const item_id = payload?.item_id;

          break
        }
        case 7: {
          // for classroom/meet
          const classroom_id = payload?.classroom_id;
          const item_id = payload?.item_id;

          break
        }
        case 8: {
          // for classroom/timeline
          const classroom_id = payload?.classroom_id;
          const item_id = payload?.item_id;

          return `${TIMELINE_URL}`
        }
        case 9: {
          // for classroom/attendance
          const classroom_id = payload?.classroom_id;
          const item_id = payload?.item_id;

          // if (classroom_id) {
          //   return `${TIMELINE_URL}attendance/overview?classroom_id=${classroom_id}`
          // }
          return `${TIMELINE_URL}attendance`
        }
        case 10: {
          // for classroom/lectures
          const classroom_id = payload?.classroom_id;
          const item_id = payload?.item_id;

          if (classroom_id && item_id) {
            return `${LECTURES_URL}watch?classroom_id=${classroomId}&lecture_id=${item_id}`
          }
          return `${LECTURES_URL}`
        }
        case 11: {
          // for classroom/alert
          break
        }


        default:
          break;
      }
    }

    return undefined;
  };

  return (
    <HStack
      w="full"
      border={`1px solid`}
      borderRadius="20px"
      borderColor={read ? borderColor : "transparent"}
      p="20px"
      bg={read ? "transparent" : bgColor}
      cursor={"pointer"}
      onClick={onClick}
    >
      <Icon
        as={
          NOTIFICATION_TYPES[type]?.icon === undefined
            ? notification
            : NOTIFICATION_TYPES[type].icon
        }
      />

      <VStack w="full" alignItems={"flex-start"}>
        <Text size="sm" noOfLines={2} wordBreak={"break-all"}>
          {content}
        </Text>

        <HStack>
          <Text variant="h3" size="xs" noOfLines={1} minW={"90px"}>
            {date == undefined
              ? "Invalid Time"
              : formatDistanceToNow(date, { addSuffix: true })}
          </Text>
          {classroomName != undefined && classroomName != null && (
            <>
              <Text variant="h3">{"•"}</Text>
              <Text variant="h3" size="xs" noOfLines={1}>
                {classroomName}
              </Text>
            </>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
};

export default NotificationCard;
