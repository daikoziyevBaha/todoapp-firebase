import React from "react";
import './todo-form.css';
import { XCircle } from "react-bootstrap-icons";

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
    submitButtonTest,
    handleRemoveFile
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
                    className="input-file"
                    id='file' 
                    name='file'
                    type='file' 
                    formEncType='multipart/form-data' 
                    onChange={handleUploadFile}
                    multiple />
                <div>
                    {filesList && filesList.length !== 0 && (
                        <div>
                            <h3>Uploaded Files:</h3>
                            <ul>
                                {
                                    filesList.map( (item) => {
                                        return (
                                            <div className="file" key={item.id}>
                                                <a 
                                                    href={item.url} 
                                                    target="_blank"
                                                >
                                                    <li>{item.name}</li>
                                                </a>
                                                <XCircle 
                                                    color="red"
                                                    size={"18px"}
                                                    onClick={() => handleRemoveFile(item)}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )}
                </div>
                <button
                    className="create-btn"
                    onClick={handleSubmit}
                >
                    <span>{submitButtonTest}</span>
                </button>
            </div>
        </form>
    )
}

export default TodoForm;