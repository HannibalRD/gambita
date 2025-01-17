import { createContext, useState } from "react";

const infoClient = {
    nombre: "",
    correo: "",
    password: "",
    photo: null,
    cp: "",
    dieta: "",
}



export const UserInfoContext = createContext(null)

// eslint-disable-next-line react/prop-types
export function UserInfoProvider({ children }) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [user, setUser] = useState(userInfo || infoClient)
    // When initializing the context value

    const logout = () => {
        setUser(infoClient)
        localStorage.setItem('userInfo', JSON.stringify(infoClient));
    }

    return (
        <UserInfoContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserInfoContext.Provider>
    )
}