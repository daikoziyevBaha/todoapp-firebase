import { useState, useEffect } from "react";
import firebase from "../firebase";

const useTodos = () => {
    console.log("useTodos");
    const [todos, setTodos] = useState([])
    
    useEffect( () => {
        let unsubscribe = firebase
            .firestore()
            .collection('todos')
            .onSnapshot( snapshot => {
                const data = snapshot.docs.map( doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setTodos(data)
            })   
        return () => unsubscribe() 
    }, [])

    return todos
} 

export default useTodos;