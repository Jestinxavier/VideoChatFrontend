import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import {AvatharBackgroundColor} from '../../../Color'
const MicButton = ({ localStream }) => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => {
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicEnabled(!micEnabled);
  };

  return (
    <IconButton onClick={handleToggleMic} style={{ color: "white",border:'1px solid #fff', backgroundImage:AvatharBackgroundColor }}>
      {micEnabled ? <MicIcon /> : <MicOffIcon />}
    </IconButton>
  );
};

export default MicButton;
