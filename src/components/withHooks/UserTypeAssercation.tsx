import React, { useState } from 'react'

type AuthType = {
    name: string,
    email: string
}

function UserTypeAssercation() {
    const [user, setUser] = useState<AuthType>({} as AuthType)

    const handellogin = () => {
        setUser({
            name: 'vikash',
            email: 'revivecoding@gamil.com'
        })
    }
    return (
        <>
            <button onClick={handellogin}>Login</button>
            <div>
                User name is {user.name}
            </div>
            <div>
                User email is {user.email}
            </div>
        </>
    )
}

export default UserTypeAssercation