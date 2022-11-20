import { useState, useEffect, useMemo } from "react";
import firebase from "../firebase";
import { sortTodosByDate } from "../services";
import { firestore } from "../firebase";
import { collection, doc, getDocs, onSnapshot, onValue } from "firebase/firestore";

const useTodos = () => {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        let unsubscribe = onSnapshot(collection(firestore, "todos"),
            (snapshot) => {
                const data = snapshot.docs.map( doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setTodos(sortTodosByDate(data))
        })
        return () => unsubscribe()
    }, [])

    return todos
} 

export default useTodos;