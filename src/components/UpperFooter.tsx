import { Box, SxProps } from "@mui/material";

function UpperFooter() {
  return (
    <div>
      <Box sx={topShadowSx} />
      <Box sx={upperFooterWrapperSx}>
        <img
          src="../../images/lh-logotype.png"
          alt="LH Custom Picks logotype"
        />
      </Box>
    </div>
  );
}

// CSS ----------------------------------------------

const upperFooterWrapperSx: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px 0",
};

const topShadowSx: SxProps = {
  height: "1px",
  boxShadow: "0px 3px 3px rgba(0,0,0, 0.23)",
};

export default UpperFooter;
