import { Box, SxProps } from "@mui/material";

function UpperFooter() {
  return (
    <div>
      <Box sx={topShadowSx} />
      <Box sx={{ height: "150px" }}>UPPERFOTTER</Box>
    </div>
  );
}

// CSS ----------------------------------------------

const topShadowSx: SxProps = {
  height: "1px",
  //   boxShadow: "0px 3px 1px 0px, rgba(0, 0, 0, 0.23)",
  boxShadow: "0px 3px 3px rgba(0,0,0, 0.23)",
};

export default UpperFooter;
