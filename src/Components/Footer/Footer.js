import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png"
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkdin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Wave} alt="" style={{ width: '100%' }} />
            <div className='f-content'>
                <span>Suyashgupta34604@gmail.com</span>
                <div className='f-icons'>
                    <a href="https://www.instagram.com/suyashgupta34604/"><Insta color="white" size="3rem" /></a>
                    <a href="https://github.com/SuyashGupta007"> <Github color="white" size="3rem" /></a>
                    <a href="https://www.linkedin.com/in/suyash-gupta-660075175/"><Linkdin color="white" size="3rem" /></a>
                </div>
            </div>
        </div>

    )
}

export default Footer