import './App.css';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Meals from './Pages/Meals/Meals';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header></Header>

      <Routes>     

        <Route path="/about"
        element={<About></About>}>
        </Route>
             
        {/* <Route path="/login" 
        element={<Login></Login>}>        
        </Route> */}

        <Route path="/meals" 
        element={<Meals></Meals>}>        
        </Route>

          <Route path="/" 
          element={<Home></Home>}>
          </Route>
        
          <Route path="*"
          element={ <Error></Error>}>     
        </Route>
        
        </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
