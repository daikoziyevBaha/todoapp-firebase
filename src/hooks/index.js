import { useState, useEffect } from "react";
import { sortTodosByDate, isDateExpired } from "../services";
import { firestore } from "../firebase";
import { collection,  onSnapshot } from "firebase/firestore";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
/**
 * Custom hook to subscribe on realtime updates in todos
 * @returns todos
 */
const useTodos = () => {
    dayjs.extend(customParseFormat);
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        let unsubscribe = onSnapshot(collection(firestore, "todos"),
            (snapshot) => {
                const data = snapshot.docs.map( doc => {
                    const expired = isDateExpired(doc.data().date, doc.data().time)
                    return {
                        id: doc.id,
                        ...doc.data(),
                        expired
                    }
                })
                setTodos(sortTodosByDate(data))
        })
        return () => unsubscribe()
    }, [])

    return todos
} 

export default useTodos;