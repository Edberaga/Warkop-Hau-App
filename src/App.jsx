import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import Menu from './scenes'
import Makanan from './scenes/Makanan'
import Minuman from './scenes/Minuman'
import Sayuran from './scenes/Sayuran'
import AnekaJus from './scenes/AnekaJus'
import AyamGoreng from './scenes/AyamGoreng'
import Tambahan from './scenes/Tambahan'
import Topbar from './components/Customer Bar/Topbar'

import Bill from './scenes/Admin/Bill'
import Order from './scenes/Admin/Order'
import Login from './scenes/Admin/Login';

function App() {
  const [count, setCount] = useState(0);

  const [user] = useAuthState(auth);

  const RequireAuth = ({children}) => {
    return user ? (children) : <Navigate to="/login"/>
  };

  return (
    <div className="App">
      <Topbar/>
      <menu className='app-container'>
        <Routes>
          {/*For customer viewing the menu */}
          <Route path='/' element={<Menu/>}/>
          <Route path='/*' element={<Menu/>} />
          {/*
          <Route path='/makanan' element={<Makanan/>}/>
          <Route path='/minuman' element={<Minuman/>}/>
          <Route path='/sayuran' element={<Sayuran/>}/>
          <Route path='/aneka-jus' element={<AnekaJus/>}/>
          <Route path='/ayam-goreng' element={<AyamGoreng/>}/>
          <Route path='/tambahan' element={<Tambahan/>}/>
          */}

          {/*For admin viewing the system */}
          <Route path='/warkop-admin' element={<Login/>}/>
            <Route element={<RequireAuth/>}>
              <Route path='/bill-panel' element={<Bill/>}/>
              <Route path='/order-panel' element={<Order/>}/>
            </Route>
        </Routes>
      </menu>
    </div>
  )
}

export default App
