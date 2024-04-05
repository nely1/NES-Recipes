import React, { useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import RecipesList from '../components/RecipesList';


export default function Navigation(props) {
    
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={props.value}
          onChange={(event, newValue) => {
            props.setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recipes" icon={<RestoreIcon />} value={0}/>
          <BottomNavigationAction label="Ingredients" icon={<FavoriteIcon />}  value={1}/>
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />}  value={2}/>
        </BottomNavigation>
      </Paper>
    )
  };