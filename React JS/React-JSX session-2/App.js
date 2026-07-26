import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserGreeting from './components/UserGreeting';
import UserGreetingClass from './components/UserGreetingClass';
import MiniProfile from './components/MiniProfile';
export default function App(){return(<div className="container mt-5"><h1 className="text-primary text-center">Welcome to React JSX!</h1><div className="card p-3 my-3"><UserGreeting username="Katyayini Trivedi"/></div><div className="card p-3 my-3"><UserGreetingClass username="Katyayini Trivedi"/></div><div className="card p-3 my-3"><MiniProfile/></div></div>);}