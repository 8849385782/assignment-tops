import './App.css';
import LikeButton from './components/LikeButton';
import CartItem from './components/CartItem';
import SongVote from './components/SongVote';
import RatingSelector from './components/RatingSelector';
export default function App(){return(<div className='container mt-5'><h1 className='text-center mb-4'>React useState Assignment</h1><div className='row g-4'><div className='col-md-6'><LikeButton/></div><div className='col-md-6'><CartItem/></div><div className='col-md-6'><SongVote/></div><div className='col-md-6'><RatingSelector/></div></div></div>);}