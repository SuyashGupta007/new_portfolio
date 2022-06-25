import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Resume from "./resume.pdf"
import { themeContext } from '../../Context';
import Card from '../Card/Card';
import { motion } from 'framer-motion';
const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 1, type: 'spring' }
    return (


        <div className="services" id='Services'>
            {/*Left Side*/}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>services</span>
                <span> I  try to provide the best solutions and services(website design and Full Stack Development) to companies and organizations
                    <br />
                    I offer my clients tailor-made services and fast services.
                    <br />
                    As always, please feel free to make Pull Requests to add additional offerings that you feel may help.
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>

                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>

            </div>
            {/*Right Side*/}
            <div className="cards">
                {/*First Card*/}
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25%' }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Sketch , Photoshop, TailwindCSS, Bootstrap"} />
                </motion.div>
                {/*Second Card*/}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    style={{ top: '12rem', left: "-4rem" }}>
                    <Card

                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"HTML , CSS, JavaScript, React, Next, C++"} />
                </motion.div>
                {/*third Card*/}
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}

                    style={{ top: '19rem', left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Adobe XD , Figma , Bootstrap, Adobe Photoshop "} />
                </motion.div>
                <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>

            </div>

        </div>
    )
}

export default Services