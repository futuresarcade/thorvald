import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="mb-5">
        <ul>
            <li className=" text-4xl uppercase" >
                <Link to="/">Thorvald</Link>
            </li>


        </ul>
    </nav>
);

export default NavBar;
