import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { CartContextProvider } from '../context/CartContext';
import Checkout from './Checkout/Checkout'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  
  return (
    <>
      <BrowserRouter>
      <CartContextProvider>
        <Navbar/>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"
/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='category/:category' element={<ItemListContainer/>} />
          <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
      </CartContextProvider>
      </BrowserRouter>
    </>
   
  );
}

export default App;
