import {useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipesPage from './pages/RecipesPage';

function App() {

  // PATHS  
  const ROOT = "/"; // the recipes page
  const INGREDIENTS = "/ingredients";
  const RECIPE = "/recipe:id"


  



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
          <Route path={ROOT} element={<RecipesPage/>} />
          <Route path={INGREDIENTS}/>  
          <Route path={RECIPE}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
