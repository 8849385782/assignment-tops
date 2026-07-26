import {useState,useEffect} from 'react';import axios from 'axios';
export default function RestaurantSearch(){const[data,setData]=useState([]),[q,setQ]=useState('');
useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/users').then(r=>setData(r.data));},[]);
const f=data.filter(x=>x.name.toLowerCase().includes(q.toLowerCase()));
return <div className='card'><h4>Restaurant Search (Mock)</h4><input className='form-control mb-2' value={q} onChange={e=>setQ(e.target.value)} placeholder='Search'/><ul>{f.map(x=><li key={x.id}>{x.name}</li>)}</ul></div>}