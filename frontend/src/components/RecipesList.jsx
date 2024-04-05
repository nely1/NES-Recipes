import React, { useState, useEffect, useRef} from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';


function processIngredientsToString(recipeIngredients) {
  let ingredients = ""
  let length = recipeIngredients.length;

  for (let i = 0; i < length - 1; i++) {
    
    ingredients += `${recipeIngredients[i].name}: ${recipeIngredients[i].amount}, `;
    
  };

  ingredients += `${recipeIngredients[length - 1].name}: ${recipeIngredients[length - 1].amount}`;

  return ingredients
}


export default function RecipesList(props) {

  return (
    <>
     <List>
        {props.data.map((recipe, index) => (
            <ListItemButton key={index}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={'/static/images/avatar/5.jpg'} />
              </ListItemAvatar>
              <ListItemText primary={recipe.name} secondary={processIngredientsToString(recipe.ingredients)} />
            </ListItemButton>
        ))}
    </List>
  </>
  )
};
