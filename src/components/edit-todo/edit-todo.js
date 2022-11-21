import React, {useState} from "react";
import { Pencil } from "react-bootstrap-icons";
import TodoForm from "../todo-form";
import Modal from "../modal";
import './edit-todo.css';
import { firestore } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { deleteObject, ref } from 'firebase/storage';
import { storage } from "../../firebase";

/**
 * Component for updating todo
 * @param {*} todo Current todo 
 */
const EditTodo = ({todo}) => {
    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState(todo.title)
    const [description, setDescription] = useState(todo.description)
    const [date, setDate] = useState(todo.date)
    const [time, setTime] = useState(todo.time)
    const [filesList, setFilesList] = useState(todo.filesList || [])
    
    /**
     * Function to upload new file in storage
     * @param {*} event Event consist information about files that were choosed
     */
    const handleUploadFile = (event) => {
        const files = [...event.target.files];
        if (files.length >= 1) {
            files.forEach(file => {
                setFilesList((prevState) => [
                    ...prevState,
                    file.name
                ])
            });
        }
    }
    /**
     * Function to update todo in firestore
     * @param {*} e Event object 
     */
    const handleUpdateTodo = async e => {
        e.preventDefault()
        try {
            await setDoc(doc(firestore, 'todos', todo.id), {
                title,
                description,
                date,
                time,
                filesList,
                checked: todo.checked
            })
        } catch (e) {
            console.log(e);
        }
        setShowModal(false)
    }
    /**
     * Function to delete file from storage and state
     * @param {*} file Choosed file
     */
    const handleRemoveFile = (file) => {
        const fileRef = ref(storage, file.path);
        deleteObject(fileRef)
            .then( res => {
                const newFilesList = filesList.filter(prevFile => {
                        return prevFile.id !== file.id
                    })
                setFilesList(newFilesList)
                setDoc(doc(firestore, 'todos', todo.id), {
                    filesList: newFilesList
                })
            })
    }

    return (
        <div className="edit-todo">
            <button 
                className="action-btn"
                onClick={() => setShowModal(true)}
            >   
                <Pencil size={"18px"} />
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <TodoForm
                    handleSubmit={handleUpdateTodo}
                    heading="Edit item"
                    title = {title}
                    setTitle = {setTitle}
                    description = {description}
                    setDescription = {setDescription}
                    date = {date}
                    setDate = {setDate}
                    time = {time}
                    setTime = {setTime}
                    filesList = {filesList}
                    handleUploadFile = {handleUploadFile}
                    submitButtonTest = "Edit"
                    handleRemoveFile={handleRemoveFile}
                />
            </Modal>
        </div>
    )
}

export default EditTodo;