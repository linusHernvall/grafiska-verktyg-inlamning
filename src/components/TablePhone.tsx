import {
  Box,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function TablePhone() {
  return (
    <div>
      <Box sx={priceZoneSx}>
        <Typography sx={{ marginTop: "20px" }} variant="h2">
          PRICING OPTIONS
        </Typography>
        <TableContainer sx={tableWrapperSx}>
          <Table>
            <TableHead>
              <TableRow sx={rowLightGraySx}>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">QTY</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">1 Side</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">2 Side</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={rowDarkGraySx}>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">5</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€16</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€22</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={rowLightGraySx}>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">10</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€24</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€32</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={rowDarkGraySx}>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">50</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€35</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€60</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={rowLightGraySx}>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">100</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€60</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€90</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={rowDarkGraySx}>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">150</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€90</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€120</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={rowLightGraySx}>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">200</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€100</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€150</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={rowDarkGraySx}>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">300</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€129</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€198</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={rowLightGraySx}>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">400</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€145</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€240</Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={rowDarkGraySx}>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">500</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€200</Typography>
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  <Typography variant="h3">€280</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography sx={textSx} variant="body1">
          Larger lots can also be ordered. Contact us by email or phone and we
          will sort out an arrangement on the behalf of your demands.
        </Typography>
      </Box>
    </div>
  );
}

// CSS ----------------------------------------------

const priceZoneSx: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const tableWrapperSx: SxProps = {
  margin: "20px 0 10px",
  width: "440px",
};

const rowLightGraySx: SxProps = {
  background: "#f9f9f9",
};

const rowDarkGraySx: SxProps = {
  background: "#f3f3f3",
};

const cellSx: SxProps = {
  textAlign: "center",
  height: "80px",
};

const textSx: SxProps = {
  width: "440px",
};

export default TablePhone;
