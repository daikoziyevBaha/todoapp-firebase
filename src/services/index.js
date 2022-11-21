import dayjs from "dayjs";

/**
 * Functions sorts todos list by date
 * @returns soted todos
 */
export const sortTodosByDate = (todos) => {
    return todos.sort((a,b) => {
        return new Date(a.date) - new Date(b.date); 
    })
}

export const isDateExpired = (date, time) => {
    const newDate = new Date(date).setHours(time.slice(0,2), time.slice(3,5))
    return dayjs(newDate).isBefore(dayjs(new Date()))
}

/**
 * Function filters todos by Filter type
 * @param {*} todos Todos list
 * @param {*} action Filter type
 * @returns Filtered todos
 */
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
                return todo.checked || todo.expired
            })
        default:
            return todos
    }
}