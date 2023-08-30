import Header from './Components/Header';
import Cart from './Components/Cart'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
