import { useState } from 'react'
import BottomNav from '../components/bottomNav.jsx'
import AddNotice from '../components/newNotice/addNotice.jsx'
import NoticeCard from '../components/noticeCard.jsx'

export default function Personal() {
    const [count, setCount] = useState(0)
    const [notatki, setNotatki] = useState([<NoticeCard key={0}/>])
    const [notatka, setNotatka] = useState({
        title: '',
        content: '',
        date: '',
        time: '',
        color: '',
        id: ''
    })

    function addNotice() {
        setNotatki([...notatki, <NoticeCard key={notatki.length} />])
    }

    return (
        <div className="App">
            <h2>Personal</h2>
            <div className="card">
               {notatki}
            </div>
            <AddNotice add={addNotice}/>
        </div>
    )
}
