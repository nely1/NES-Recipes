import React, { useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SetMealIcon from '@mui/icons-material/SetMeal';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
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
          <BottomNavigationAction label="Recipes" icon={<RestaurantMenuIcon />} value={0}/>
          <BottomNavigationAction label="Ingredients" icon={<SetMealIcon />}  value={1}/>
          <BottomNavigationAction label="Record" icon={<ReceiptLongIcon />}  value={2}/>
        </BottomNavigation>
      </Paper>
    )
  };