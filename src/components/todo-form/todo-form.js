import React from "react";
import './todo-form.css';

const TodoForm = ({
    handleSubmit,
    heading = null,
    title = '',
    setTitle,
    description,
    setDescription,
    date,
    setDate,
    time,
    setTime,
    filesList=[],
    handleUploadFile,
    setShowModal = false
}) => {
    return (
        <form>
            <div className="text">
                {
                    heading && <h2>{heading}</h2>
                }
                <input 
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Add title..."
                    autoFocus />
                <input 
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Add description..." />
                <input 
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    placeholder="Choose date..." />
                <input 
                    type="time"
                    value={time}
                    onChange={e => setTime(e.target.value)} />
                <input 
                    id='file' 
                    name='file'
                    type='file' 
                    formEncType='multipart/form-data' 
                    onChange={handleUploadFile}
                    multiple />
                <div>
                    {filesList.length != 0 && (
                        <div>
                            <h3>Uploaded Files:</h3>
                            <ul>
                                {
                                    filesList.map( (item, index) => {
                                        return <li key={String(index)}>{item}</li>
                                    })
                                }
                            </ul>
                        </div>
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
    )
}

export default TodoForm;