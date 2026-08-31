import {useEffect,useState} from 'react';
export default function IPLScores(){const[d,setD]=useState([]),[e,setE]=useState('');
useEffect(()=>{(async()=>{try{const r=await fetch('https://jsonplaceholder.typicode.com/users');if(r.status!==200)throw new Error();setD(await r.json());}catch{setE('Error loading scores');}})();},[]);
return <div className='card'><h4>IPL Scores (Mock)</h4>{e?<div className='alert alert-danger'>{e}</div>:<ul>{d.slice(0,3).map(x=><li key={x.id}>{x.name}</li>)}</ul>}</div>}