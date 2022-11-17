import React, {useState} from "react";
import './add-todo.css';
import addIcon from '../../assets/images/plus.svg';
import Modal from "../modal";

const AddTodo = () => {
    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [filesList, setFilesList] = useState([])
    const [selectedFile, setSelectedFile] = useState(null)

    
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
                <form>
                    <div className="text">
                        <h2>Create New Item</h2>
                        <input 
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Add title..."
                            autoFocus
                        />
                        <input 
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Add description..."
                        />
                        <input 
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            placeholder="Choose date..."
                        />
                        <input 
                            type="time"
                            value={time}
                            onChange={e => setTime(e.target.value)}
                        />
                        <input 
                            id='file' 
                            name='file'
                            type='file' 
                            formEncType='multipart/form-data' 
                            onChange={handleUploadFile}
                            multiple
                        />
                        <div>
                            {filesList.length != 0 && (
                                <>
                                    <h3>Uploaded Files:</h3>
                                    <ul>
                                        {
                                            filesList.map( (item, index) => {
                                                return <li key={String(index)}>{item}</li>
                                            })
                                        }
                                    </ul>
                                </>
                            )}
                        </div>
                        <button
                            className="create-btn"
                        >
                            <span>Create</span>
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="close-btn"
                        >
                            <span>X</span>
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddTodo;