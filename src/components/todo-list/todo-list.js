import React, { useContext } from "react";
import './todo-list.css';
import Todo from "../todo/todo";
import { TodoContext } from '../../context';
import  Spinner from "../spinner";
import { filterTodoByAction } from "../../services";

/**
 * Component for rendering todos list, getting from useContext
 * @component
 */

const TodoList = () => {
    const { todos, filter } = useContext(TodoContext)
    const filteredTodos = filterTodoByAction(todos, filter)

    return (
        <ul className="todos">
            {filteredTodos && filteredTodos.length > 0
                ? (
                    filteredTodos.map( todo => {
                        return <Todo todo={todo} key={todo.id} />
                    })
                )
                : <Spinner />  }  
        </ul>
    )
}

export default TodoList;