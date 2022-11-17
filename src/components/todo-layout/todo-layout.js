import React from "react";
import './todo-layout.css';
import Header from "../header";
import TodoList from "../todo-list";
import addIcon from '../../assets/images/plus.svg';

const TodoLayout = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="todo-app">
                    <Header />
                    <div className="todo-app__list">
                        <TodoList />
                    </div>
                    <div className="todo-app__add_todo">
                        <img src={addIcon} alt="add" className="icon"/>
                        <span>Create New Item</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoLayout;