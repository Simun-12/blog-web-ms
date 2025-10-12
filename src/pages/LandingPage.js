import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import bgImage from "../assets/4_SdjkdS98aKH76I8eD0_qjw.jpg";

const LandingPage = () => {
  return (
    <>
      {/* Sleek top line */}
      <Box sx={{ height: "1px", width: "100%", bgcolor: "black" }} />

      <Navbar />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "85vh",
          overflow: "hidden",
          backgroundColor: "#eee6d5", // slight off-white
        }}
      >
        {/* LEFT TEXT SECTION */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            pl: { xs: 4, md: 20 },
            textAlign: "left",
            height: "100%",
          }}
        >
          {/* Heading split into two lines */}
          <Box sx={{ mb: 2 }}> 
            <Typography
              variant="h1"
              sx={{
                color: "black",
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: "4rem", md: "6rem" },
                lineHeight: 1.05,
                fontWeight: "bold",
              }}
            >
              Human
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: "black",
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: "4rem", md: "6rem" },
                lineHeight: 1.05,
                fontWeight: "bold",
                mb: 4,
              }}
            >
              stories & ideas
            </Typography>
          </Box>

          {/* Secondary text */}
          <Typography
            variant="h5"
            sx={{
              mb: 6,
              color: "text.secondary",
              maxWidth: "700px",
            }}
          >
            A place to read, write, and deepen your understandings.
          </Typography>

          {/* Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 30,
              px: 8,
              py: 2,
              textTransform: "none",
              bgcolor: "black",
              color: "white",
              fontSize: "1.25rem",
              "&:hover": { bgcolor: "#333" },
            }}
          >
            Start Writing
          </Button>
        </Box>

        {/* RIGHT IMAGE SECTION */}
        <Box
          sx={{
            flex: "0 0 40%",
            height: "100%",
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right center",
          }}
        />
      </Box>

      {/* Sleek bottom line */}
      <Box sx={{ height: "1px", width: "100%", bgcolor: "black" }} />
    </>
  );
};

export default LandingPage;
