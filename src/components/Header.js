import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Crop32Icon from "@mui/icons-material/Crop32";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";


const Header = () => {
  return (
    <div>
      <Box>
        <Box>
        <Grid container>
          <Typography>09:41</Typography>
          <Grid item xs={8} />
          <SignalCellularAltIcon />
          <WifiIcon />
          <Crop32Icon />
        </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
