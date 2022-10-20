import React, { useEffect } from "react";
import { Avatar, Text, useColorModeValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchFileDownloadURL,
  fetchFileMetaData,
} from "../redux/actions/dataActions";
import { getInitials } from "../utils";

const UserAvatar = ({ filekey, fullName, ...props }) => {

  const dispatch = useDispatch();
  const metadata = useSelector((state) =>
    state?.commonData?.filesMetadata?.find((data) => data.filekey === filekey)
  );

  //first fetch metadata
  useEffect(() => {
    if (filekey && !metadata) {
      dispatch(fetchFileMetaData(filekey));
    }
  }, [filekey, dispatch, metadata]);

  //then if metadata is there then fetch downloadURL
  useEffect(() => {
    if (filekey && metadata?._id === filekey && !metadata?.download_url) {
      //only call if metadata is fetched
      // dispatch(fetchFileDownloadURL(filekey));
    }
    dispatch(fetchFileDownloadURL(filekey));
  }, [filekey, dispatch, metadata]);

  const bg = useColorModeValue("borders.light.e100", "borders.dark.e100");
  const color = useColorModeValue("texts.light.e100", "texts.dark.e100");

  return (
    <Avatar
      bg={bg}
      icon={
        <Text p={2} size={props?.size || "lg"} variant={color}>
          {getInitials(fullName)}
        </Text>
      }
      src={metadata?.download_url || metadata?.thumbnail_path}
      {...props}
    />
  );
};

export default UserAvatar;
