import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Modal
} from "@mui/material";
import AboutCard from "./AboutCard";

const Cards = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        paddingLeft: "50px",
        width: "85%",
        height: "200px",
        marginBottom: "20px",
        backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"
    


      }}
    >
      <CardContent>
        <Box>
            <img src="" alt=""/>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography onClick={handleOpen} gutterBottom variant="h6" component="div">
           Lazy Bear
          </Typography>
          <Box sx={{ mt: "10px" }}>
            <Typography variant="subtitle2">Cake, pastries</Typography>
            <Typography variant="subtitle2">Cannout place, New Delhi</Typography>
          </Box>
        </Box>
       <Box sx={{display:"flex", justifyContent:"space-between"}}><Box sx={{ display: "flex", mt: "10px" }}>
          <Typography variant="subtitle2">*4.5</Typography>
          <Typography variant="subtitle2">Popularity</Typography>
        </Box>
        <Box>
           <Typography variant="subtitle2">$200</Typography> 
           <Typography variant="subtitle2">$Cost for two</Typography>
        </Box>
        </Box>
      </CardContent>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AboutCard />
        </Modal>
    </Card>
  );
};

export default Cards;