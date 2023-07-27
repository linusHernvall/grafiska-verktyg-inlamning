import { Box, SxProps, createTheme, useMediaQuery } from "@mui/material";

function Hero() {
  const theme = createTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <div>
      <Box sx={heroImgSx}>
        <img
          src={
            isWideScreen
              ? "../../images/pick-and-guitar.jpeg"
              : "../../images/heroimg.png"
          }
          alt="Custom made guitar picks on a wooden floor."
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </Box>
    </div>
  );
}

// CSS ----------------------------------------------

const heroImgSx: SxProps = {
  marginTop: "80px",
  height: "400px",
  maxHeight: "400px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
};

export default Hero;
