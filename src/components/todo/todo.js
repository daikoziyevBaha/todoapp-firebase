import React from "react";
import './todo.css';
import {XCircle, CheckCircleFill, Circle} from 'react-bootstrap-icons';
import EditTodo from "../edit-todo";
import firebase, { firestore } from "../../firebase";
import dayjs from "dayjs";
import { doc, deleteDoc, setDoc } from 'firebase/firestore';

const Todo = ({todo}) => {

    const handleDeleteTodo = todo => {
        deleteDoc(doc(firestore, 'todos', todo.id))
    }

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
                        <span className="todo-preview title">{todo.title}</span>
                        <span className="todo-preview date">{dayjs(todo.date).format('DD.MM.YYYY')} - {todo.time}</span>
                        <ul className="todo-preview files-list">
                            { todo.filesList && todo.filesList.map(file => {
                                return (
                                    <li key={file.id} className="todo-preview files-list file-field">
                                        <a href={file.url} target="_blank">
                                        {file.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={todo.checked ? 'line-through' : ''}></div>
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