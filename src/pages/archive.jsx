import { useState } from 'react'
import BottomNav from '../components/bottomNav.jsx'
import AddNotice from '../components/newNotice/addNotice.jsx'

export default function Personal() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Archive</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Licznik {count}
        </button>
      </div>

        <AddNotice />
    </div>
  )
}
