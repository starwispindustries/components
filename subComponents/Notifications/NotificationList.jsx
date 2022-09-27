import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Center,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";

import NotificationCard from "./NotificationCard";
import {
  FETCHING_NOTIFICATIONS_STATUS,
  IS_LOADING,
  IS_NOT_INITIATED,
} from "../../redux/actions/actionTypes";
import {
  getNotifications,
  markAsRead,
} from "../../redux/actions/notificationActions";
import { useState } from "react";

const NotificationsList = () => {
  const dispatch = useDispatch();

  const notifications = useSelector(
    (state) => state?.notification?.notifications
  );
  const notificationsStatus = useSelector(
    (state) => state?.notification?.fetchStatus
  );

  const [markAllLoading, setMarkAllLoading] = useState(false);

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  const setAsRead = (id) => {
    let tmpNotification = notifications;
    for (let i = 0; i < tmpNotification.length; i++) {
      if (tmpNotification[i]._id === id) {
        tmpNotification[i].read = true;
        dispatch({
          type: FETCHING_NOTIFICATIONS_STATUS,
          payload: tmpNotification,
        });
        break;
      }
    }
  };

  const markAllAsRead = async () => {
    if (notifications == undefined || notifications.length == 0) {
      return;
    }

    try {
      setMarkAllLoading(true);
      const notificationsIDList = notifications
        .filter((item) => {
          if (item.read) {
            return false;
          }

          return true;
        })
        .map((item) => item._id);

      await markAsRead(notificationsIDList);
      setMarkAllLoading(false);
    } catch (err) {
      setMarkAllLoading(false);
      console.log(err);
    }
  };

  return (
    <VStack pr="5px" pb="20px" w="full">
      <HStack
        w="full"
        justifyContent={"space-between"}
        p={"20px"}
        pb="0px"
        pr="15px"
      >
        <HStack spacing={"2px"}>
          <Text variant="h1" fontWeight={"700"}>{`Notifications`}</Text>
          <Text variant="h1">{"(" + notifications.length + ")"}</Text>
        </HStack>

        <Button
          size={"xs"}
          variant="primary_ghost"
          onClick={markAllAsRead}
          isLoading={markAllLoading}
        >
          Mark all as read
        </Button>
      </HStack>

      <VStack
        w="full"
        overflowY={"auto"}
        maxH={{ base: "85vh", md: "500px" }}
        p={"20px"}
        pr="15px"
        pb="0px"
      >
        {notificationsStatus == IS_LOADING ||
        notificationsStatus == IS_NOT_INITIATED ? (
          <Spinner mb="20px" />
        ) : notifications.length == 0 ? (
          <Center>
            <Text variant="subtext" pb="20px">
              No Notifications
            </Text>
          </Center>
        ) : (
          notifications.map((item) => (
            <NotificationCard
              key={item._id}
              id={item._id}
              content={item.payload?.title}
              date={new Date(item.payload?.created_at * 1000)}
              classroomName={item.payload?.classroom_name}
              type={item.payload?.kind}
              read={item.read}
              setAsRead={setAsRead}
              classroomId={item.payload?.classroom_id}
              actionPath={item.payload?.action_path}
              itemId={item.payload?.item_id}
            />
          ))
        )}
      </VStack>
    </VStack>
  );
};

export default NotificationsList;
