import React, {useState} from "react";
import './add-todo.css';
import addIcon from '../../assets/images/plus.svg';
import Modal from "../modal";
import TodoForm from "../todo-form";
import firebase, { firestore } from "../../firebase";
import dayjs from "dayjs";
import { doc, addDoc, collection } from "firebase/firestore";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 as uuid4 } from "uuid";

const AddTodo = () => {
    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [filesList, setFilesList] = useState([])
    
    //Todo... validation for same filenames
    const handleUploadFile = (event) => {
        const files = [...event.target.files];
        if (files.length >= 1) {
            files.forEach( async file => {
                const id = uuid4()
                const fileRef = ref(storage, `files/${file.name}${id}`)
                await uploadBytes(fileRef, file)
                const url = await getDownloadURL(fileRef)
                setFilesList((prevState) => [
                    ...prevState,
                    {
                        id,
                        name: file.name,
                        path: fileRef.fullPath,
                        url: url,
                    }
                ])
            });
        }
    }

    const handleRemoveFile = (file) => {
        const fileRef = ref(storage, file.path);
        deleteObject(fileRef)
            .then( res => {
                const newFilesList = filesList.filter(prevFile => {
                        return prevFile.id !== file.id
                    })
                setFilesList(newFilesList)
            })
        console.log(filesList);
    }

    const clearState = () => {
        setTitle('')
        setDescription('')
        setDate(null)
        setTime(null)
        setFilesList([])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title && description && date && time) {
            try {
                await addDoc(collection(firestore, 'todos'), {
                    title,
                    description,
                    date,
                    time,
                    filesList,
                    checked: false
                })
            } catch (e) {
                console.log(e);
            }
            clearState()
            setShowModal(false)
        }
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
                    handleSubmit={handleSubmit}
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
                    submitButtonTest = "Create"
                    handleRemoveFile={handleRemoveFile}
                />
            </Modal>
        </div>
    )
}

export default AddTodo;