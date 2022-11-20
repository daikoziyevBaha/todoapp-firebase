import dayjs from "dayjs";

export const sortTodosByDate = (todos) => {
    return todos.sort((a,b) => {
        return new Date(a.date) - new Date(b.date); 
    })
}

export const filterTodoByAction = (todos, action) => {
    switch(action) {
        case 'ALL':
            return todos
        case 'ACTIVE':
            return todos.filter( todo => {
                return !todo.checked
            })
        case 'DONE':
            return todos.filter( todo => {
                return todo.checked
            })
        default:
            return todos
    }
}