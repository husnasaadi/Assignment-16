import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const naviagte=useNavigate();
  const handleDelete=(id)=>{
    const confirm=window.confirm('would you like to delete?');
    if(confirm){
      axios.delete(' http://localhost:3000/user'+id)
      .then(res=>{
        naviagte('/')
      }).catch(err=>console.log(err))
    }

  }
    const [data,setData]=useState([])
    useEffect(()=>{
     axios.get(' http://localhost:3000/user')
     .then(res=>setData(res.data))
     .catch(err=>console.log(err));
    },[])
  return (
    <div className='bg-liht vh-100  d-flex  flex-column justify-content-center align-items-center'>
        <h1>userlist</h1>
         <div className='w-75 rounded bg-white shadow p-4'>
          <div className='d-flex justify-content-end'><Link to={'/create'} className='btn btn-success'>Add +</Link></div>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((d,i)=>(
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                    <td>
                    <Link to={`/read/&{d.}`} className='btn btn-sm btn-info me-2'>Read</Link>
                      <button className='btn btn-sm btn-primary me-2'>Edit</button>
                      <button onClick={e=>handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                    </td>

                  </tr>
                ))
              }
            </tbody>
          </table>

         </div>
    </div>
  )
}

export default Home
