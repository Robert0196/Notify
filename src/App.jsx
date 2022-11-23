import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BottomNav from './components/bottomNav.jsx'
import Personal from './pages/personal.jsx'
import Shared from './pages/shared.jsx'
import Archive from './pages/archive.jsx'

function App() {
  const [page, setPage] = useState(0)

  function changePage(strona) {
    setPage(strona)
  }

  return (
    <div className="App">
      <h1>Notify</h1>
      
      {page === 0 && <Personal changePage={changePage}/>}
      {page === 1 && <Shared changePage={changePage}/>}
      {page === 2 && <Archive changePage={changePage}/>}

      
      <BottomNav changePage={changePage}/>
    </div>
  )
}

export default App
