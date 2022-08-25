import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'reader--black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"  alt="Netflix"/>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                <img src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png" alt="Usuário" />
                <img src="https://i.pinimg.com/originals/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.png" alt="Usuário" />
                <img src="https://pbs.twimg.com/media/DmBraqkXcAA1Yco.jpg" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}