import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './components/Card';

const App = () => {
  const [img , setimg ] = useState([]);
  const [index , setIndex] = useState(1)
  const getImg = async ()=>{
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setimg(res.data)
    console.log(res.data)
  }
  useEffect(()=>{
    getImg()
  },[index])
  return (
    <div>
      <button onClick={getImg} >get image</button>

      {img.map((e,i)=>{
       return  <div key={i}>
        <Card e ={e}/>
       </div>
      })}
      <button onClick={(e)=>setIndex(index+1)}>next</button>
      <h3>page{index}</h3>
    </div>
  )
}

export default App