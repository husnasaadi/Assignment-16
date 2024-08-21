import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Read = () => {
  const [data,setData]=useState([])
  const {id} =useParams();
    useEffect(()=>{
     axios.get(' http://localhost:3000/user/'+id)
     .then(res=>setData(res.data))
     .catch(err=>console.log(err));
    },[])
  return (
    <div>
      <h1>read pg</h1>
    </div>
  )
}

export default Read
