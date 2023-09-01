import {useState,useEffect} from 'react';
import Header from './Components/Header';
import Cart from './Components/Cart'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {db} from "./firebaseApp"
function App() {

  const[cartItems,setCartItems]=useState([])

  const getCartItems=()=>{
      db.collection('cartitems').onSnapshot((snapshot)=>{
        const tempItems=snapshot.docs.map((doc)=>(
          {
            id:doc.id,
            product:doc.data()
          }
        ))

        setCartItems(tempItems)

        })

  }

  useEffect(()=>{
    getCartItems();
  },[])

  console.log(cartItems.length)
  return (
    <BrowserRouter>
    <div className="App">
    <Header cartItems={cartItems}/>
      <Routes>
        <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
