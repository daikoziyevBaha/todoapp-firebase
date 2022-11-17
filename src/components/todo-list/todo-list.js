import React from "react";
import './todo-list.css';
import Todo from "../todo/todo";

const TodoList = () => {
    return (
        <ul className="todos">
            <Todo />
            <Todo />
            <Todo />
        </ul>
    )
}

export default TodoList;