import {
  Box,
  SxProps,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";

function CelluloidPicks() {
  const theme = createTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));

  // CSS ----------------------------------------------

  const celluloidZone: SxProps = {
    display: "flex",
    justifyContent: "center",
  };

  const celluloidWrapperSx: SxProps = {
    width: "100%",
    margin: "0 25px",
    paddingBottom: "40px",
    maxWidth: "780px",
  };

  const underlineSx: SxProps = {
    background: "#000000",
    height: "1px",
    margin: "-5px 0 40px",
  };

  const picksSx: SxProps = {
    display: "flex",
    alignItems: "center",
    gap: "40px",
  };

  const cardSx: SxProps = {
    height: "220px",
    width: "220px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    "&:hover": {
      borderRadius: "3px",
      transform: "scale(1.1)",
      boxShadow: "0px 3px 3px rgba(0,0,0, 0.23)",
    },
  };

  return (
    <div>
      <Box sx={celluloidZone}>
        <Box sx={celluloidWrapperSx}>
          <Typography sx={{ marginTop: "20px" }} variant="h2">
            CELLULOID PICKS
          </Typography>
          <Box sx={underlineSx} />

          <Box
            sx={{
              ...picksSx,
              flexDirection: isWideScreen ? "row" : "column",
              flexWrap: isWideScreen ? "wrap" : "nowrap",
              justifyContent: isWideScreen ? "center" : "flex-start",
            }}
          >
            <Box sx={cardSx}>
              <img
                src="../../images/standard-white.png"
                alt="Standard white guitar pick"
                style={{
                  margin: "20px 0 15px",
                  width: "120px",
                  height: "133px",
                }}
              />
              <Typography variant="h3">Standard</Typography>
            </Box>
            <Box sx={cardSx}>
              <img
                src="../../images/triangle-black.png"
                alt="Black triangle guitar pick"
                style={{
                  margin: "20px 0 15px",
                  width: "136px",
                  height: "133px",
                }}
              />
              <Typography variant="h3">Triangle</Typography>
            </Box>
            <Box sx={cardSx}>
              <img
                src="../../images/teardrop-white.png"
                alt="White teardrop guitar pick"
                style={{
                  margin: "20px 0 15px",
                  width: "120px",
                  height: "133px",
                }}
              />
              <Typography variant="h3">Teardrop</Typography>
            </Box>
            <Box sx={cardSx}>
              <img
                src="../../images/progrip-black.png"
                alt="Black progrip guitar pick"
                style={{
                  margin: "20px 0 15px",
                  width: "120px",
                  height: "133px",
                }}
              />
              <Typography variant="h3">Progrip</Typography>
            </Box>
            <Box sx={cardSx}>
              <img
                src="../../images/pearloid-white.png"
                alt="White pearloid guitar pick"
                style={{
                  margin: "20px 0 15px",
                  width: "120px",
                  height: "133px",
                }}
              />
              <Typography variant="h3">Pearloid</Typography>
            </Box>
            <Box sx={cardSx}>
              <img
                src="../../images/glowing.png"
                alt="Glowing guitar pick"
                style={{
                  margin: "20px 0 15px",
                  width: "120px",
                  height: "133px",
                }}
              />
              <Typography variant="h3">Glowing</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default CelluloidPicks;
