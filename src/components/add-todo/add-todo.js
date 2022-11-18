import React, {useState} from "react";
import './add-todo.css';
import addIcon from '../../assets/images/plus.svg';
import Modal from "../modal";
import TodoForm from "../todo-form";

const AddTodo = () => {
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
    const addTodo = (event) => {
        event.preventDefault();
        const data = new FormData();
        console.log(data);
    }
    return (
        <div className="add-todo">
            <button
                className="add-todo btn"
                onClick={() => setShowModal(true)}
            >
                <img src={addIcon} alt="add" className="icon"/>
                <span>Create New Item</span>
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <TodoForm 
                    heading="Create New Item"
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

export default AddTodo;