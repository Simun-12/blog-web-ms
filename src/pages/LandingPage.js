import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import RegisterPage from "./RegisterPage"; // import your modal
import bgImage from "../assets/4_SdjkdS98aKH76I8eD0_qjw.jpg";

const LandingPage = () => {
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  const footerLinks = ["Help", "Terms", "Policy", "Careers", "Blog", "Post"];
  const NAVBAR_HEIGHT = 80; // adjust to your navbar height
  const TOP_LINE_HEIGHT = 1; // 1px top line

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Top horizontal line */}
      <Box sx={{ height: `${TOP_LINE_HEIGHT}px`, width: "100%", bgcolor: "black" }} />

      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: `calc(100vh - ${NAVBAR_HEIGHT + TOP_LINE_HEIGHT}px)`,
          minHeight: 0,
          backgroundColor: "#eee6d5",
          overflow: "hidden",
        }}
      >
        {/* Left text */}
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

          <Typography
            variant="h6"
            sx={{
              mb: 6,
              color: "text.secondary",
              maxWidth: "700px",
            }}
          >
            A place to read, write, and deepen your understandings.
          </Typography>

          {/* Get Started button opens modal */}
          <Button
            variant="contained"
            size="large"
            onClick={handleOpenRegister}
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

        {/* Right image */}
        <Box
          sx={{
            flex: "0 0 40%",
            height: "100%",
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center right",
          }}
        />
      </Box>

      {/* Horizontal line above footer */}
      <Box sx={{ height: "1px", width: "100%", bgcolor: "black" }} />

      {/* Footer */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#eee6d5",
          py: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 4 }}>
          {footerLinks.map((link, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: "0.875rem",
                cursor: "pointer",
                color: "text.primary",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Register Modal */}
      <RegisterPage open={openRegister} onClose={handleCloseRegister} />
    </Box>
  );
};

export default LandingPage;
