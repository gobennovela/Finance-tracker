import React, { createContext, useReducer } from "react";

const initialState = {
    transactions: [
        { id: 1, text: "Flower", amount: -20 },
        { id: 2, text: "Salary", amount: 300 },
        { id: 3, text: "Book", amount: -10 },
        { id: 4, text: "Camera", amount: 150 },
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action);
        }
        

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}