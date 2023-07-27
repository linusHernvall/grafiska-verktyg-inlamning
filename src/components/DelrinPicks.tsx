import {
  Box,
  SxProps,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";

function DelrinPicks() {
  const theme = createTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Box sx={delrinZone}>
        <Box sx={delrinWrapperSx}>
          <Typography sx={{ marginTop: "20px" }} variant="h2">
            DELRIN PICKS
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
                src="../../images/standard-black.png"
                alt="Standard black guitar pick"
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
                src="../../images/triangle-white.png"
                alt="White triangle guitar pick"
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
                src="../../images/teardrop-black.png"
                alt="Black teardrop guitar pick"
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
                src="../../images/progrip-white.png"
                alt="White progrip guitar pick"
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
                src="../../images/pearloid-black.png"
                alt="Black pearloid guitar pick"
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

// CSS ----------------------------------------------

const delrinZone: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const delrinWrapperSx: SxProps = {
  width: "100%",
  border: "2px solid red",
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

// TODO: Add hover effect on card - getting bigger with shadow
const cardSx: SxProps = {
  height: "220px",
  width: "220px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

export default DelrinPicks;
