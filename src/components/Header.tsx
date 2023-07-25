import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Box, SxProps } from "@mui/material";

function Header() {
  return (
    <div>
      <Box sx={headerSx}>
        <Box sx={{ marginLeft: "25px" }}>
          <img src="../../images/lhcp-textlogo.png" alt="A text logotype" />
        </Box>

        <Box sx={{ display: "flex", marginLeft: "auto" }}>
          <Box sx={cartSx}>
            <ShoppingCartIcon />
          </Box>

          <Box sx={menuSx}>
            <MenuIcon />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

// CSS ----------------------------------------------

// const headerSx: SxProps<Theme> = (theme) => ({
//   height: "80px",
//   width: "100%",
//   border: "2px solid red",
// });
const headerSx: SxProps = {
  height: "80px",
  width: "100%",
  border: "2px solid red",
  display: "flex",
  alignItems: "center",
  position: "fixed",
  top: "0",
  left: "0",
};

const cartSx: SxProps = {
  marginRight: "40px",
  cursor: "pointer",
};

const menuSx: SxProps = {
  marginRight: "30px",
  cursor: "pointer",
};

export default Header;
