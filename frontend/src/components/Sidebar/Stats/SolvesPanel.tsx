import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableCell } from "../../ui/TableCell";

interface Solve {
  id: number;
  currentTime: number;
  ao5: number;
  ao12: number;
}

export const SolvesPanel = () => {
  const solves: Solve[] = [
    {
      id: 10,
      currentTime: 9.23,
      ao5: 9.5,
      ao12: 9.76,
    },
    {
      id: 9,
      currentTime: 9.23,
      ao5: 9.5,
      ao12: 9.76,
    },
    {
      id: 8,
      currentTime: 9.23,
      ao5: 9.5,
      ao12: 9.76,
    },
    {
      id: 7,
      currentTime: 9.23,
      ao5: 9.5,
      ao12: 9.76,
    },
    {
      id: 6,
      currentTime: 9.23,
      ao5: 9.5,
      ao12: 9.76,
    },
    {
      id: 5,
      currentTime: 9.23,
      ao5: 9.5,
      ao12: 9.76,
    },
    {
      id: 4,
      currentTime: 9.23,
      ao5: 9.5,
      ao12: 9.76,
    },
    {
      id: 3,
      currentTime: 9.23,
      ao5: 9.5,
      ao12: 9.76,
    },
    {
      id: 2,
      currentTime: 9.23,
      ao5: 9.5,
      ao12: 9.76,
    },
    {
      id: 1,
      currentTime: 9.23,
      ao5: 9.5,
      ao12: 9.76,
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "0.5rem",
        overflowY: "auto",
        height: "14rem",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box>Solves: 311</Box>
      <Box>Average: 9.25</Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell> </StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>ao5</StyledTableCell>
              <StyledTableCell>ao12</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {solves.map((solve) => (
              <TableRow key={solve.id}>
                <StyledTableCell>{solve.id}</StyledTableCell>
                <StyledTableCell>{solve.currentTime}</StyledTableCell>
                <StyledTableCell>{solve.ao5}</StyledTableCell>
                <StyledTableCell>{solve.ao12}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
