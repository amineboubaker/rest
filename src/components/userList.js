import React from 'react'

import UserCard from './userCard'

const UserList = ({users}) => {
    return (
        <div>
            {users.map((el)=><UserCard el={el} key={el._id} />)}
            
        </div>
    )
}

export default UserList
