import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"

function App() {

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
      <Routes>
        <Route path={ROOT} />
        <Route path={INGREDIENTS}/>  
        <Route path={RECIPE}/>
      </Routes>
    </>
  );
}

export default App;
