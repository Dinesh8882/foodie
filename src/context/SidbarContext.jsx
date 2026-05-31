import React, { createContext, useState } from 'react'

export const SidbarContext = createContext()

function SidbarContextProvider({ children }) {
    const [active,setActive] = useState("Home")

    const values = {
        active,
        setActive
    }

    return (
        <SidbarContext.Provider value={values}>
            {children}
        </SidbarContext.Provider>
    )
}


export default SidbarContextProvider;