import React, { createContext, useState } from "react";
import useTodos from "../hooks";

const TodoContext = createContext()

const TodoContextProvier = ({children}) => {
    const todos = useTodos()
    const [filter, setFilter] = useState('ALL') 

    return (
        <TodoContext.Provider value={{
            todos,
            filter,
            setFilter
        }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export {
    TodoContextProvier,
    TodoContext
};