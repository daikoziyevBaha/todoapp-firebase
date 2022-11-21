import React, { useContext } from "react";
import './header.css';
import calendarIcon from '../../assets/images/calendar-icon.svg';
import { TodoContext } from "../../context";

/**
 * Header component with filter buttons
 * @component
 */

const Header = () => {

    // useContext returns values from ContextProvider
    const {filter, setFilter} = useContext(TodoContext)

    // Action buttons for filtering todos
    const actionBtns = [
        {
            name: "ALL",
            handleClick: () => setFilter("ALL")
        },
        {
            name: "ACTIVE",
            handleClick: () => setFilter("ACTIVE")
        },
        {
            name: "DONE",
            handleClick: () => setFilter("DONE")
        }
    ]

    return (
        <div className="header">
            <div className="header__title">
                <img src={calendarIcon} alt="calendar" className="calendar-icon"/>                          
                <h1>Todo</h1>                       
            </div>
            <div className="header__buttons">
                { actionBtns.map( (button, index) => {
                    return (
                        <button 
                            key={String(index)}
                            onClick={button.handleClick}
                            className={ filter === button.name ? 'active' : ''}
                        >
                            {button.name}
                        </button>
                )}) }
            </div>
        </div>
    )
}

export default Header;