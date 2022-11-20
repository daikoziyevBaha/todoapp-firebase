import React, {useState} from "react";
import { Pencil } from "react-bootstrap-icons";
import TodoForm from "../todo-form";
import Modal from "../modal";
import './edit-todo.css';
import { firestore } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const EditTodo = ({todo}) => {
    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState(todo.title)
    const [description, setDescription] = useState(todo.description)
    const [date, setDate] = useState(todo.date)
    const [time, setTime] = useState(todo.time)
    const [filesList, setFilesList] = useState(todo.filesList || [])
    // const [selectedFile, setSelectedFile] = useState(null)
    
    //Todo... validation for same filenames
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
                />
            </Modal>
        </div>
    )
}

export default EditTodo;