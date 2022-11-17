import React from "react";
import './todo.css';
import removeIcon from '../../assets/images/remove.svg';
import editIcon from '../../assets/images/edit.svg';

const Todo = () => {
    return (
        <li className="todo-item">
            <div className="todo">
                <div className="todo__value">
                    <input type="checkbox" style={{width: "16px", height: "16px", borderRadius: "50%"}}/>
                    <span>todo</span>
                </div>
                <div className="todo__actions">
                    <button className="action-btn">
                        <img src={editIcon} alt="edit" className="icon" />
                    </button>
                    <button className="action-btn">
                        <img src={removeIcon} alt="remove" className="icon" />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default Todo;