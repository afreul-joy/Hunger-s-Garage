import './App.css';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>
    
      <Routes>     

        <Route path="/about"
        element={<About></About>}>
        </Route>
             
        <Route path="/login" 
        element={<Login></Login>}>        
        </Route>

        <Route path="/register" 
        element={<Register></Register>}>        
        </Route>


          <Route path="/" 
          element={<Home></Home>}>
          </Route>
          
          <Route path="*"
          element={ <Error></Error>}>     
        </Route>
        
        </Routes>
     
    </div>
  );
}

export default App;
