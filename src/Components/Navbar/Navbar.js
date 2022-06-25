import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll';
const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name"> Suyash</div>
                <span><Toggle /></span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>

                        <li>
                            <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass" >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link spy={true} to='Services' smooth={true} activeClass="activeClass" >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link spy={true} to='Experience' smooth={true} activeClass="activeClass" >
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass" >
                                Portfolio
                            </Link>
                        </li>

                    </ul>
                </div>
                <button className="button n-button">
                    <Link spy={true} to='Contact' smooth={true} activeClass="activeClass" >
                        Contact
                    </Link>

                </button>
            </div>

        </div>

    )
}

export default Navbar
