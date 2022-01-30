import './App.css';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import AuthProvider from './context/AuthProvider';
import Meals from './Pages/Meals/Meals';
import BuyNow from './Pages/Meals/BuyNow/BuyNow';
import MyOrder from './Pages/MyOrder/MyOrder';
import AddMeals from './Pages/AddMeals/AddMeals';
import Edit from './Pages/MyOrder/Edit/Edit';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">

      <AuthProvider> 
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

        <Route path="/meals" 
        element={<Meals></Meals>}>        
        </Route>

        <Route path="/dashboard/myOrders" 
        element={<MyOrder></MyOrder>}>        
        </Route>

        <Route path="/dashboard" 
        element={<Dashboard></Dashboard>}>        
        </Route>

        <Route path="/myOrders/:id" 
        element={<Edit></Edit>}>        
        </Route>

        <Route path="/addMeals" 
        element={<AddMeals></AddMeals>}>        
        </Route>

        <Route path="/meals/:id" 
        element={<BuyNow></BuyNow>}>        
        </Route>


          <Route path="/" 
          element={<Home></Home>}>
          </Route>
          
          <Route path="*"
          element={ <Error></Error>}>     
        </Route>
        
        </Routes>
        
        </AuthProvider>
    </div>
  );
}

export default App;
