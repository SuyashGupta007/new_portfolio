import React, { useContext } from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import Game from "../../img/game.jpg"
import Amazon from "../../img/amazon_clone.jpg"
import Netflix from "../../img/netflix_clone.jpg"
import Signal from "../../img/signal_clone.jpg"
import 'swiper/css'
import { themeContext } from "../../Context"

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='portfolio' id='Portfolio'>
            {/*portfolio*/}
            <span className='recent' style={{ color: darkMode ? 'white' : '' }}>Recent Project</span>
            <span className="name">Portfolio</span>


            {/* Slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <a target="_blank" href="https://github.com/SuyashGupta007/netflix_clone" rel="noreferrer"><img src={Netflix} alt="" /></a>
                </SwiperSlide>

                <SwiperSlide>
                    <a target="_blank" href="https://github.com/SuyashGupta007/amazon-clone" rel="noreferrer"><img src={Amazon} alt="" /></a>
                </SwiperSlide>

                <SwiperSlide>
                    <a target="_blank" href="https://github.com/SuyashGupta007/react-native-signal-clone" rel="noreferrer" ><img src={Signal} alt="" /></a>
                </SwiperSlide>

                <SwiperSlide>
                    <a target="_blank" href="https://github.com/SuyashGupta007/space-shooter" rel="noreferrer"><img src={Game} alt="" /></a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio
