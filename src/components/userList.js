import React from 'react'
import { useSelector } from 'react-redux'

import UserCard from './userCard'

const UserList = () => {
    const users = useSelector(state => state.users)
    return (
        <div className='user'>
            {users.map((user)=><UserCard el={user} key={user._id} />)}
            
        </div>
    )
}

export default UserList
