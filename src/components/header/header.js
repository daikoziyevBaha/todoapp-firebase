import React from "react";
import './header.css';
import calendarIcon from '../../assets/images/calendar-icon.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="header__title">
                <img src={calendarIcon} alt="calendar" className="calendar-icon"/>                          
                <h1>Todo</h1>                       
            </div>
            <div className="header__buttons">
                <button>
                    All
                </button>
                <button>
                    DONE
                </button>
            </div>
        </div>
    )
}

export default Header;