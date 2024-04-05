import {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipesPage from './pages/RecipesPage';
import BasicTable from "./components/IngredientsList";
import Navigation from "./components/Navigation";
function App() {

  // PATHS  
  const ROOT = "/"; // the recipes page
  const INGREDIENTS = "/ingredients";
  const RECIPE = "/recipe:id"

  const [value, setValue] = useState(0);


  



  // useEffect(() => {
  //   fetch("http://localhost:8000/get-all").then(res => res.json()).then(data => {console.log(data)});
    
  // }
  // ,[])

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Router>
        <Routes>
          <Route path={ROOT} element={<RecipesPage value={value}/>} />
          <Route path={INGREDIENTS} element={<BasicTable/>}/>   
          <Route path={RECIPE}/>
        </Routes>
      </Router>
     <Navigation value={value} setValue={setValue}/>
    </>
  );
  // change BasicTable
}

export default App;
