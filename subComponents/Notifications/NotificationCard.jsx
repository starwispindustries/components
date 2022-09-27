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
import { CLASSROOM_URL } from "../../constants";

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
    const redirectionUrl = getRedirectionUrl();

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

  const getRedirectionUrl = () => {
    if (classroomId == undefined && itemId == undefined) {
      return undefined;
    }

    if (type == 3 && classroomId !== undefined && itemId !== undefined) {
      // Materials
      return `${CLASSROOM_URL}materials/preview?classroom_id=${classroomId}&material_id=&${
        itemId[0]
      }&type=${actionPath[0] == "notes" ? "note" : "syllabus"}`;
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
        <Text size="sm" noOfLines={2}>
          {content}
        </Text>

        <HStack>
          <Text variant="h3" size="xs">
            {date == undefined
              ? "Invalid Time"
              : formatDistanceToNow(date, { addSuffix: true })}
          </Text>
          {classroomName != undefined && classroomName != null && (
            <>
              <Text variant="h3">{"•"}</Text>
              <Text variant="h3" size="xs">
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
