import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:"#fff",
  boxShadow: '#80808024 10px 10px 10px 10px',
});

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Typography variant="h6" sx={{ color: "#8e9297" }}>
        To start chatting - choose conversation
      </Typography>
    </Wrapper>
  );
};

export default WelcomeMessage;
