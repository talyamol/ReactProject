import logo from './logo.svg';
import './App.css';
import Login from './Login';
// import Recipe from './Recipe';

import Header from './Header';
import SignIn from './SignIn';
import { Route, Routes } from 'react-router-dom';
import Recipe from './recipe';
 import Recipes from './recipes';
import Categories from './Categories';
import AddCategory from './addCategory';
import AddRecipe from './AddRecipe';
import ShoppingList from './shoppingList';
import { useSelector } from 'react-redux';
import AddProduct from './addProduct';


function App() {
const user=useSelector(state=>state.user)

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/sighin' element={<SignIn />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/addCategory' element={< AddCategory/>} />
        <Route path='/AddRecipe' element={< AddRecipe/>} />
        <Route path='/shoppingList' element={<ShoppingList userId={user?.UserId} />}></Route>
        <Route path='/addProduct' element={< AddProduct/>} />

      </Routes>
      
    </div>
  );
}

export default App;
