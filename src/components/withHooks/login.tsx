import React, { useState } from 'react'

function Login() {
const [islogin, setIslogin] = useState(false)

    const handellogin = () => {
        setIslogin(true)
    }
    const handellogout = () => {
        setIslogin(false)
    }
    return (
        <>
            <button onClick={handellogin}>Login</button>
            <button onClick={handellogout}>LogOut</button>
            <div>
             User is { islogin ?  "Login" : "logout"}
            </div>
        </>
    )
}

export default Login