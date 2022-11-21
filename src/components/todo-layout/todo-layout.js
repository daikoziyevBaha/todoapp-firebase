import React from "react";
import './todo-layout.css';
import Header from "../header";
import TodoList from "../todo-list";
import AddTodo from "../add-todo";

/**
 * Base Layout component for todo app 
 * @component
 */

const TodoLayout = () => {
    
    return (
        <div className="container">
            <div className="content">
                <div className="todo-app">
                    <Header />
                    <div className="todo-app__list">
                        <TodoList />
                    </div>
                    <AddTodo />
                </div>
            </div>
        </div>
    )
}

export default TodoLayout;