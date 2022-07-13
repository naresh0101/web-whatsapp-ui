import React, { createContext, useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [activeroom, setActiveRoom] = useState(null)

    return (
        <AppContext.Provider
            value={{ activeroom, setActiveRoom }}
        >
            {children}
        </AppContext.Provider>
    )
}