import {useEffect,useState} from 'react';
export default function TrendingSongs(){const[d,setD]=useState([]),[e,setE]=useState('');
const load=async()=>{setE('');try{const r=await fetch('https://jsonplaceholder.typicode.com/posts');if(!r.ok)throw new Error();const j=await r.json();setD(j.slice(0,3));}catch{setE('Error loading data');}};
useEffect(()=>{load();},[]);
return <div className='card'><h4>Trending Songs</h4>{e?<div className='alert alert-danger'>{e}</div>:<ul>{d.map(x=><li key={x.id}>{x.title}</li>)}</ul>}<button className='btn btn-primary' onClick={load}>Reload</button></div>}