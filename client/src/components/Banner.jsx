import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <div className="banner">
      <Box
        sx={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Remind Me!</Typography>
        <Typography
          variant="p"
          style={{
            marginTop: "10px",
            lineHeight: 2,
            fontSize: "18px",
            fontWeight: 400,
          }}
        >
          Be reminded when your Tasks are due for execution.
        </Typography>
        <Typography variant="p">
          We remind you to complete all the tasks that you add to the board.
        </Typography>
        <Button variant="outlined" style={{ marginTop: "30px" }}>
          Try Remind
        </Button>
      </Box>
    </div>
  );
};

export default Banner;
