import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Ch01 from './pages/Ch01'
import Ch02 from './pages/Ch02'
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ch01' element={<Ch01 />} />
        <Route path='/ch02' element={<Ch02 />} />
      </Routes>
    </div>
  )
}

export default App
