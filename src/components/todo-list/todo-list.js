import React, { useContext } from "react";
import './todo-list.css';
import Todo from "../todo/todo";
import { TodoContext } from '../../context';
import  Spinner from "../spinner";

const TodoList = () => {
    const todos = useContext(TodoContext)
    console.log("list:", todos);
    // const todos = [
    //     {
    //         id: '1qweqwe',
    //         title: 'Do task for interview',
    //         description: 'Some description for test todo',
    //         time: '10:00 AM',
    //         date: '06/03/2021',
    //         day: '6',
    //         checked: true,
    //     },
    //     {
    //         id: '2qwedq',
    //         title: 'Eat plov',
    //         description: 'Some description for test todo',
    //         time: '13:00 AM',
    //         date: '06/03/2021',
    //         day: '6',
    //         checked: false,
    //     },
    //     {
    //         id: '2aacxz',
    //         title: 'This is the longest todo for check length of my line',
    //         description: 'Some description for test todo',
    //         time: '10:00 AM',
    //         date: '07/03/2021',
    //         day: '7',
    //         checked: true,
    //     },
    // ]

    return (
        <ul className="todos">
            {todos && todos.length > 0
                ? (
                    todos.map( todo => {
                        return <Todo todo={todo} key={todo.id} />
                    })
                )
                : <Spinner />  }  
        </ul>
    )
}

export default TodoList;