import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './CrudApplication/Home'
import Read from './CrudApplication/Read'
import Update from './CrudApplication/Update'
import Create from './CrudApplication/Create'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
    <>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/create' element={<Create/>}/>
  <Route path='/read/:id' element={<Read/>}/>
  <Route path='/update/:id' element={<Update/>}/>

 </Routes>
    </>
  )
}

export default App
