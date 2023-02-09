import React, { useState } from 'react'

type AuthType = {
    name: string,
    email: string
}

function UserLogin() {
    const [user, setUser] = useState<null | AuthType>(null)

    const handellogin = () => {
        setUser({
            name: 'vikash',
            email: 'revivecoding@gamil.com'
        })
    }
    const handellogout = () => {
        setUser(null)
    }
    return (
        <>
            <button onClick={handellogin}>Login</button>
            <button onClick={handellogout}>LogOut</button>
            <div>
                User name is {user?.name}
            </div>
            <div>
                User email is {user?.email}
            </div>
        </>
    )
}

export default UserLogin