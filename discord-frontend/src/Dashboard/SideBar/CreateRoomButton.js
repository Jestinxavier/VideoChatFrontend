import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as roomHandler from "../../realtimeCommunication/roomHandler";

const CreateRoomButton = ({ isUserInRoom }) => {
  const createNewRoomHandler = () => {
    roomHandler.createNewRoom();
  };

  return (
    <Button
      disabled={isUserInRoom}
      onClick={createNewRoomHandler}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        // backgroundColor: "#5865F2",
        background: "linear-gradient(145deg, #831616, #f4452c)",
        boxShadow: "20px 20px 60px #929292, -20px -20px 60px #a2a2a2",
      }}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateRoomButton;
