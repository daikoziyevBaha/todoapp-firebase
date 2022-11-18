import React from "react";
import './todo.css';
import {XCircle, CheckCircleFill, Circle} from 'react-bootstrap-icons';
import EditTodo from "../edit-todo";

const Todo = ({todo}) => {
    return (
        <li className="todo">
            <div className="todo-container">
                <div className="todo-container__value">
                    { todo.checked
                        ? (
                            <span className="checked">
                                <CheckCircleFill color="#bebebe" />
                            </span> )
                        : (
                            <span className="unchecked">
                                <Circle color={'blue'} />
                            </span>
                        )
                    }
                    <div className="todo-preview">
                        <span className="todo-preview title">{todo.title}</span>
                        <span className="todo-preview date">{todo.date}-{todo.time}</span>
                        <div className={todo.checked ? 'line-through' : ''}></div>
                    </div> 
                </div>
                <div className="todo-container__actions">
                    <EditTodo />
                    <button className="action-btn">
                        <XCircle color="red" size={"18px"} />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default Todo;