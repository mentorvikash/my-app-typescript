import React, { createContext, useState } from "react"

export type authUser = {
    fname: string,
    email: string,
} 

type UsrContextProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: authUser | null,
    setUser: React.Dispatch<React.SetStateAction<authUser | null>>
}

export const userContext = createContext({} as UserContextType)


export const UserContextProvider = ({children}: UsrContextProps) => {
    const [user, setUser] = useState< authUser | null >(null);
    return <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>
}