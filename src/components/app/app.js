import React from "react";
import Modal from "../modal";
import './app.css';
import TodoLayout from "../todo-layout";

const App = () => {
    return (
        <main>
            <Modal 
                open = {false}
            />
            <TodoLayout />
        </main>
    )
}

export default App;