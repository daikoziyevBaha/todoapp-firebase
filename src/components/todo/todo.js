import React from "react";
import './todo.css';
import {XCircle, CheckCircleFill, Circle} from 'react-bootstrap-icons';
import EditTodo from "../edit-todo";
import { firestore } from "../../firebase";
import dayjs from "dayjs";
import { doc, deleteDoc, setDoc } from 'firebase/firestore';

/**
 * Todo component for manipulating one item
 * @component
 * @param {*} todo One todo from the list 
 */
const Todo = ({todo}) => {

    /**
     * Function to delete todo from firestore and state
     * @param {*} todo Selected todo 
     */
    const handleDeleteTodo = todo => {
        deleteDoc(doc(firestore, 'todos', todo.id))
    }
    /**
     * Function to change Check property in todo
     * @param {*} todo 
     */
    const handleCheckTodo = todo => {
       setDoc(doc(firestore, 'todos', todo.id), {
            ...todo,
            checked: !todo.checked
       })
    }

    return (
        <li className="todo">
            <div className="todo-container">
                <div 
                    className="todo-container__value"
                    onClick={() => handleCheckTodo(todo)}
                >
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
                        <div className="todo-preview title">
                            <span className={todo.checked || todo.expired ? "checked" : "unchecked"}>{todo.title}</span>
                            {todo.expired &&
                                <span className="expired">- expired</span>
                            }
                            <div className={todo.checked || todo.expired ? 'line-through' : ''}></div>
                        </div>
                        <span className="todo-preview date">{dayjs(todo.date).format('DD.MM.YYYY')} - {todo.time}</span>
                        <ul className="todo-preview files-list">
                            { todo.filesList && todo.filesList.map(file => {
                                return (
                                    <li key={file.id} className="todo-preview files-list file-field">
                                        <a href={file.url} target="_blank" rel="noreferrer">
                                        {file.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div> 
                </div>
                    <div className="todo-container__actions">
                    <EditTodo 
                        todo={todo}
                    />
                    <button 
                        className="action-btn"
                        onClick={() => handleDeleteTodo(todo)}
                    >
                        <XCircle color="red" size={"18px"} />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default Todo;