import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableCell } from "../../../ui/TableCell";
import { SessionSelect } from "./Session/SessionSelect";

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
        maxHeight: "27rem",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <SessionSelect />
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Box>Solves: 311</Box>
          <Box>Average: 9.25</Box>
        </Box>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell> </StyledTableCell>
              <StyledTableCell>
                <b>Time</b>
              </StyledTableCell>
              <StyledTableCell>
                <b>ao5</b>
              </StyledTableCell>
              <StyledTableCell>
                <b>ao12</b>
              </StyledTableCell>
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
