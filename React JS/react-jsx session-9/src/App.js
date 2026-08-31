import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DealsPage from './components/DealsPage';
import CartPage from './components/CartPage';
import NotFound from './components/NotFound';
import './App.css';
export default function App(){
return(<BrowserRouter><Navbar/><div className="container mt-4"><Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/deals" element={<DealsPage/>}/>
<Route path="/cart" element={<CartPage/>}/>
<Route path="*" element={<NotFound/>}/>
</Routes></div></BrowserRouter>);
}