import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Box, Container, SxProps } from "@mui/material";

function Header() {
  return (
    <div>
      <Box sx={headerSx}>
        <Container sx={headerContainerSx}>
          <Box>
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
        </Container>
      </Box>
    </div>
  );
}

// CSS ----------------------------------------------

// TODO: 1. Add bottom shadow on header
//       2. Add hover effects on icons

const headerSx: SxProps = {
  height: "80px",
  width: "100%",
  border: "2px solid red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: "0",
  left: "0",
};

const headerContainerSx: SxProps = {
  height: "80px",
  maxWidth: "940px",
  border: "2px solid green",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const cartSx: SxProps = {
  marginRight: "40px",
  cursor: "pointer",
};

const menuSx: SxProps = {
  cursor: "pointer",
};

export default Header;
