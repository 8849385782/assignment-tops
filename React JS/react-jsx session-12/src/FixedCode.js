export default function FixedCode(){return <div className='card'><h4>Fixed useEffect Code</h4><pre>{`useEffect(() => {
 const load = async () => {
  try {
   const response = await fetch('https://jsonplaceholder.typicode.com/invalidurl');
   if (!response.ok) throw new Error('HTTP Error');
   const data = await response.json();
   setData(data);
  } catch (err) {
   setError(true);
  }
 };
 load();
}, []);`}</pre></div>}