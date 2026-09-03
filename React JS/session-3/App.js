import './App.css';
import ProductCard from './components/ProductCard';
import UserProfile from './components/UserProfile';
export default function App(){return(<div className="container mt-5"><h1 className="text-center text-primary mb-5">React Props Assignment</h1><div className="row"><div className="col-md-6"><ProductCard productName="Wireless Mouse" price={799}/></div><div className="col-md-6"><UserProfile username="john_doe" followers={520} profilePic="https://i.pravatar.cc/150?img=3"/></div></div><hr/><UserProfile username="guest_user"/></div>);}