import React, { createContext } from "react";
import useTodos from "../hooks";

const TodoContext = createContext()

const TodoContextProvier = ({children}) => {
    const todos = useTodos()
    return (
        <TodoContext.Provider value={todos}>
            {children}
        </TodoContext.Provider>
    )
}

export {
    TodoContextProvier,
    TodoContext
};