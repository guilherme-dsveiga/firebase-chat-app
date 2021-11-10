import React from 'react';
import Burger from '../assets/menu.svg'

function Menu({handleClick}) {
        return (
                <div className="menu-container">
                        <a onClick={handleClick} className="menu-burger">
                                <img src={Burger}></img>
                        </a>
                        <h1 className="title">React Firebase Chat</h1>
                </div>
        )
}

export default Menu
