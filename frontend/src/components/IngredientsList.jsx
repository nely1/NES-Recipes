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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170, align: 'center'},
  { id: 'minus', label: '', minWidth: 100, align: 'center' },
  { id: 'amount', label: 'Amount', minWidth: 100, align: 'center' },
  { id: 'add', label: '', minWidth: 100, align: 'center' },

];

<<<<<<< Updated upstream
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

=======
>>>>>>> Stashed changes
export default function IngredientsList(props) {
  const [value, setValue] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [newIngredient, setNewIngredient] = React.useState({ name: '', amount: 0 });
  const [open, setOpen] = React.useState(false);

<<<<<<< Updated upstream
=======
  React.useEffect(() => {
    // Map initial data to rows when props.data changes
    setRows(props.data.map(({ name, amount }) => ({ name, amount })));
  }, [props.data]); // Run this effect whenever props.data changes


  const handleAddButtonClick = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].amount = parseInt(updatedRows[index].amount, 10) + 1;
    setRows(updatedRows);
  };

  const handleMinusButtonClick = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].amount = parseInt(updatedRows[index].amount, 10) - 1;
    setRows(updatedRows);
  };


  const handleAddRow = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setRows([...rows, newIngredient]);
    setNewIngredient({ name: '', amount: 0 });
    setOpen(false);
  };

  const handleChange = (e) => {
    setNewIngredient({ ...newIngredient, [e.target.name]: e.target.value });
  };

>>>>>>> Stashed changes
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
          <StyledTableRow>
              <StyledTableCell colSpan={columns.length} align="center">
                <button 
                style={{
                  padding: '10px 20px', // Adjust padding to increase button size
                  fontSize: '16px', // Adjust font size to increase text size
                  fontWeight: 'bold', // Make text bold
                }}
                onClick={() => handleAddRow()}>Add Ingredient</button>
              </StyledTableCell>
            </StyledTableRow>
            {rows.map((row, index) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id == 'add') { 
                        return (
                          <StyledTableCell key={column.id} align={column.align}>
                            <button onClick={() => handleAddButtonClick(index)}>+</button>
                          </StyledTableCell>
                        );
                      } 
                      else if (column.id == 'minus') { 
                        return (
                          <StyledTableCell key={column.id} align={column.align}>
                            <button onClick={() => handleMinusButtonClick(index)}>-</button>
                          </StyledTableCell>
                        );
                      } 
                      else {
                        return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </StyledTableCell>
                        );
                      }
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
<<<<<<< Updated upstream
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
      
=======
      </TableContainer>     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Ingredient</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the name and amount of the new ingredient:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={newIngredient.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="amount"
            name="amount"
            label="Amount"
            type="number"
            fullWidth
            value={newIngredient.amount}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog> 
>>>>>>> Stashed changes
    </Box>
  );
}