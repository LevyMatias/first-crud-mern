import Home from './pages/Home'
import CreateUsers from './pages/CreateUsers'
import UpdateUsers from './pages/UpdateUsers'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <div>
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUsers />} />
        <Route path="/update/:id" element={<UpdateUsers />} />
      </Routes>
    </Router>
  </div>
  )
  
}

export default App