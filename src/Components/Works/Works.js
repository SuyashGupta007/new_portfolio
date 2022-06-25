import React, { useContext } from 'react'
import './Work.css';
import Github from "../../img/github.png"
import Unity from "../../img/unity.jpg"
import VS from "../../img/vs.jpg"
import Adroid from "../../img/android.jpg"
import Informatica from "../../img/informatica.jpg"
import { themeContext } from "../../Context"
import { motion } from "framer-motion";


const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='works'>
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Worked on All These</span>
                <span>Platforms</span>
                <span>
                    I have Woked on Diffrent platforms,
                    <br />
                    Some of them are Android Studio, Vs Code, Infromatica developer Tool,Github,Unity.
                </span>
                <button className="button s-button">Hire me</button>
                <div className='blur s-blur' style={{ background: "#ABF1FF9" }} ></div>
            </div>
            {/* right Side*/}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}


                    className="w-mainCircle">
                    <div className='w-secCircle'>
                        <img src={Adroid} style={{ borderRadius: "50%" }} alt="" />
                    </div>
                    <div className='w-secCircle' >
                        <img style={{ borderRadius: "50%" }} src={Informatica} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img style={{ borderRadius: "50%" }} src={VS} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img style={{ borderRadius: "50%" }} src={Unity} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Github} alt="" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>

        </div>
    )
}

export default Works
