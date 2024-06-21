import React, { createContext, useContext, useState, useRef } from "react";

export const FoxContext = createContext();

export const useFox = () => {
    const context = useContext(FoxContext);
    if (!context) {
        console.error("Error creating Fox context");
        return;
    }
    return context;
}

export function FoxProvider({ children }) {
    const foxRef = useRef();
    const [fox, setFox] = useState({
        ref: foxRef,
        body: null,
        animation: "Idle",
        isInvisible: false,
        isPoweredUp: false,
    });

    const setIsInvisible = (isInvisible) => {
        setFox((prevFox) => ({ ...prevFox, isInvisible }));
      };
    
    const activatePower = () => {
        setFox((prevFox) => ({ ...prevFox, isPoweredUp:true}));
        setTimeout(() => {
            setFox((prevFox) => ({ ...prevFox, isPoweredUp: false }));
        }, 10000);
    }

    return (
        <FoxContext.Provider value={{ fox, setFox, setIsInvisible, activatePower}}>
            {children}
        </FoxContext.Provider>
    )
}

