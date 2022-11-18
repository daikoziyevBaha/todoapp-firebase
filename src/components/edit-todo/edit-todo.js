import React, {useState} from "react";
import { Pencil } from "react-bootstrap-icons";
import TodoForm from "../todo-form";
import Modal from "../modal";
import './edit-todo.css';

const EditTodo = () => {
    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [filesList, setFilesList] = useState([])
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
                />
            </Modal>
        </div>
    )
}

export default EditTodo;