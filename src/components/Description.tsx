import { Box, SxProps, Typography } from "@mui/material";

function Description() {
  // CSS ----------------------------------------------

  const textWrapperSx: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  };

  const textSx: SxProps = {
    maxWidth: "440px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div>
      <Box sx={textWrapperSx}>
        <Box sx={textSx}>
          <Typography variant="h2">You Do The Picking</Typography>
          <Typography variant="body1">
            Stand out from the crowd with our customized guitar picks. Design
            your picks from a variety of colors and shapes made from premium
            materials.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Description;
