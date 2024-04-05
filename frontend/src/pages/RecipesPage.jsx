import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import RecipesList from '../components/RecipesList';
import IngredientsList from '../components/IngredientsList';
import { getRecipes } from "../actions/recipes";
import UploadPage from './RecipeCreationPage';

function refreshData(value) {
  if (value === 0) {
    return [];
  }
  if (value === 1) {
    return ingredients;
  }
  else {
    return [];
  }
}


export default function RecipesPage(props) {
  // const [value, setValue] = useState(0);
  const ref = useRef(null);

  const dispatch = useDispatch();
  const recipes = useSelector((state) => state?.recipes);
  const [data, setData] = useState(() => refreshData(props.value));



  const renderInfo = () => {
    if (props.value === 0) {
      return <RecipesList data={recipes} />
    }
     if (props.value == 1) {
      return <IngredientsList data={data}/>
    }
 
    else if (props.value === 2) {
      return <UploadPage/>
    }
    
  }



  useEffect(() => {
    dispatch(getRecipes());
    ref.current.ownerDocument.body.scrollTop = 0;
    setData(refreshData(props.value));
  }, [props.value, setData]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      {renderInfo()}

      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      </Paper>
    </Box>
  );
}

// layout for ingredients
const ingredients = [
  {
    name: "tomato",
    amount: 2,
    person: '/static/images/avatar/1.jpg'
  },
  {
    name: "potato",
    amount: 4,
    person: '/static/images/avatar/5.jpg',
  }
]