import { useState } from 'react'

type AuthUser= {
    name:string
    email:string
}

export const User = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name:"Sam",
            email: "toneverland87@gmail.com",
        })
    }

    return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <div>User email is  {user?.email}</div>
    </div>
    )
}
