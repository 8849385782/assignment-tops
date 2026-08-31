import {useEffect,useState} from 'react';import axios from 'axios';
export default function MovieList(){const[m,setM]=useState([]),[l,setL]=useState(true),[e,setE]=useState('');
useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/posts').then(r=>{setM(r.data.slice(0,5));setL(false)}).catch(()=>{setE('Error loading data');setL(false);});},[]);
return <div className='card'>{l?'Loading...':e?<p>{e}</p>:<><h4>Top 5 Movies (Mock)</h4><ul>{m.map(x=><li key={x.id}>{x.title}</li>)}</ul></>}</div>}