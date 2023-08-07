import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import * as roomHandler from "../../../realtimeCommunication/roomHandler";
import { AvatharBackgroundColor } from "../../../Color";

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {
    roomHandler.leaveRoom();
  };

  return (
    <IconButton
      onClick={handleLeaveRoom}
      style={{
        color: "white",
        border: "1px solid #fff",
        backgroundImage: AvatharBackgroundColor,
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
