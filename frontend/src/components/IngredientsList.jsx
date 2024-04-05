import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import { styled } from '@mui/material/styles';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170, align: 'center'},
  { id: 'amount', label: 'Amount', minWidth: 100, align: 'center' },

];

function createData(name, amount) {
  return { name, amount};
}

const rows = [
  createData('Tomato', 2),
  createData('Potato', 4),
  createData('Tomato', 2),
  createData('Potato', 4),
  createData('Tomato', 2),
  createData('Potato', 4),
  createData('Tomato', 2),
  createData('Potato', 4),
  createData('Tomato', 2),
  createData('Potato', 4),
  createData('Tomato', 2),
  createData('Potato', 4),
  createData('Tomato', 2),
  createData('Potato', 4),
  createData('Tomato', 2),
  createData('Potato', 4),
  createData('Tomato', 2),
  createData('Potato', 4),
  createData('Tomato', 2),
  createData('Potato', 4),
];

export default function IngredientsList(props) {
  const [value, setValue] = React.useState(0);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <Box sx={{ pb: 7 }} >
      <TableContainer sx={{ maxHeight: `calc(100vh - 56px - 56px)` }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

       <BottomNavigation
          sx={{position: 'fixed', bottom: 0, right: 0, left:0}}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recipes" icon={<RestoreIcon />} value={0}/>
          <BottomNavigationAction label="Ingredients" icon={<FavoriteIcon />}  value={1}/>
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />}  value={2}/>
        </BottomNavigation>
      
    </Box>
  );
}