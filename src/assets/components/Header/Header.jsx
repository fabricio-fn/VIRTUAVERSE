import React, { useState } from 'react';
import './header.scss';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [showInput, setShowInput] = useState(false)

    function ToggleMenu() {
        setShowMenu(!showMenu);
    }

    function ToggleInput() {
        setShowInput(!showInput)
    }

    return (
        <header className="header">

            <div className="search">
                <button onClick={ToggleInput} className='btnSearch'>
                    {showInput ?
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                            fill='#F9F9F9'/>
                        </svg>

                        : <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                            fill="#F9F9F9" />
                        </svg>}
                </button>

                {showInput ? (
                    <input type="text" placeholder='Search' />
                ) : null}
            </div>

            <div className="logo">
                VIRTUAVERSE
            </div>

            {showMenu ? (
                <nav>
                    <a href="#home">Inicio</a>
                    <a href="#artists">Produtos</a>
                    <a href="#event">Preços</a>
                    <a href="#contact">Sobre</a>
                    <a href="#contact">Contato</a>
                    <button className='btnHeader'>
                        Login
                    </button>
                </nav>
            ) : null}

            <button className='btnMenu' onClick={ToggleMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="gg:menu-right">
                        <path id="Vector" d="M22 18.005C22 18.555 21.554 19 21.005 19H12.995C12.7311 19 12.478 18.8952 12.2914 18.7086C12.1048 18.522 12 18.2689 12 18.005C12 17.7411 12.1048 17.488 12.2914 17.3014C12.478 17.1148 12.7311 17.01 12.995 17.01H21.005C21.555 17.01 22 17.455 22 18.005ZM22 12C22 12.55 21.554 12.995 21.005 12.995H2.995C2.73111 12.995 2.47803 12.8902 2.29143 12.7036C2.10483 12.517 2 12.2639 2 12C2 11.7361 2.10483 11.483 2.29143 11.2964C2.47803 11.1098 2.73111 11.005 2.995 11.005H21.005C21.555 11.005 22 11.451 22 12ZM21.005 6.99C21.2689 6.99 21.522 6.88517 21.7086 6.69857C21.8952 6.51197 22 6.25889 22 5.995C22 5.73111 21.8952 5.47803 21.7086 5.29143C21.522 5.10483 21.2689 5 21.005 5H8.995C8.86433 5 8.73495 5.02574 8.61423 5.07574C8.49351 5.12574 8.38382 5.19903 8.29143 5.29143C8.19903 5.38382 8.12574 5.49351 8.07574 5.61423C8.02574 5.73495 8 5.86433 8 5.995C8 6.12567 8.02574 6.25505 8.07574 6.37577C8.12574 6.49649 8.19903 6.60618 8.29143 6.69857C8.38382 6.79097 8.49351 6.86426 8.61423 6.91426C8.73495 6.96426 8.86433 6.99 8.995 6.99H21.005Z"
                        fill="#F9F9F9" />
                    </g>
                </svg>
            </button>
        </header>
    )
}