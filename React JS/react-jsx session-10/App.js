import {useState} from "react";
import Navbar from "./components/Navbar";import Parent from "./components/Parent";import Notification from "./components/Notification";
import UserContext from "./context/UserContext";import ThemeContext from "./context/ThemeContext";import NotificationContext from "./context/NotificationContext";
import "./App.css";
export default function App(){const [theme,setTheme]=useState("light");const [count,setCount]=useState(5);
return <UserContext.Provider value={{username:"Kena",loggedIn:true}}>
<ThemeContext.Provider value={{theme,toggleTheme:()=>setTheme(theme==="light"?"dark":"light")}}>
<NotificationContext.Provider value={{count,setCount}}>
<div style={{backgroundColor:theme==="light"?"#f8f9fa":"#212529",color:theme==="light"?"#000":"#fff",minHeight:"100vh",padding:"30px"}}>
<Navbar/><div className="container"><h2 className="mt-4">React Context API Assignment</h2>
<button className="btn btn-warning mt-3" onClick={()=>setTheme(theme==="light"?"dark":"light")}>Toggle Theme</button>
<Parent/><Notification/></div></div>
</NotificationContext.Provider></ThemeContext.Provider></UserContext.Provider>}