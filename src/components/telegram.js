import React from 'react'
import Sidebar from './sidebar'
import '../components/telegram.css'
import Thread from './thread'

function Telegram() {
    return (
        <div className = "telegram">
            <Sidebar />
            <Thread />
        </div>
    )
}

export default Telegram