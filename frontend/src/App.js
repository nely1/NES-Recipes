import {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipesPage from './pages/RecipesPage';
import BasicTable from "./components/IngredientsList";
import Navigation from "./components/Navigation";
import RecipeCreationPage from "./pages/RecipeCreationPage";
function App() {

  // PATHS  
  const ROOT = "/"; // the recipes page
  const INGREDIENTS = "/ingredients";
  const RECIPE = "/recipe/:id"
  const ADDRECIPE = "/add-recipe"

  const [value, setValue] = useState(0);



  return (
    <>
    <Router>
        <Routes>
          <Route path={ROOT} element={<RecipesPage value={value}/>} />
          <Route path={INGREDIENTS} element={<BasicTable/>}/>   
          <Route path={ADDRECIPE} element={<RecipeCreationPage/>}/>
        </Routes>
      </Router>
     <Navigation value={value} setValue={setValue}/>
    </>
  );
  // change BasicTable
}

export default App;
