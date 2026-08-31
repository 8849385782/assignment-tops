import {NavLink} from 'react-router-dom';
export default function Navbar(){
const s=({isActive})=>({color:isActive?'yellow':'white',marginRight:'20px',textDecoration:'none',fontWeight:'bold'});
return(<nav className="navbar navbar-dark bg-primary"><div className="container">
<NavLink className="navbar-brand" to="/">Flipkart Clone</NavLink>
<div><NavLink to="/" style={s}>Home</NavLink><NavLink to="/deals" style={s}>Deals</NavLink><NavLink to="/cart" style={s}>Cart</NavLink></div>
</div></nav>)}