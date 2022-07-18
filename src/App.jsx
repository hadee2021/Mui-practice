import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Ch01 from './pages/Ch01'
import Ch02 from './pages/Ch02'
import Ch03 from './pages/Ch03'
import Ch04 from './pages/Ch04'
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ch01' element={<Ch01 />} />
        <Route path='/ch02' element={<Ch02 />} />
        <Route path='/ch03' element={<Ch03 />} />
        <Route path='/ch04' element={<Ch04 />} />
      </Routes>
    </div>
  )
}

export default App
