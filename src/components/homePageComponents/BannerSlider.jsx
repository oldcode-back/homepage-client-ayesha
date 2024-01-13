//styled-component imports
import styled from 'styled-components'
//image imports
import banner1 from '../../assets/images/bannerSliderImages/banner1.png'
import banner2 from '../../assets/images/bannerSliderImages/banner2.png'
import banner3 from '../../assets/images/bannerSliderImages/banner3.png'
import banner4 from '../../assets/images/bannerSliderImages/banner4.png'
import banner5 from '../../assets/images/bannerSliderImages/banner5.png'

//icon imports
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
//swiper imports
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Wrapper = styled.div`
width: 100vw;
height: 90vh;

${'' /* swiper slider styles start */}
.banner-slider{
    width: 100%;
    height: 100%;
}
.swiper {
  width: 100%;
  height: 100%;
}


.banner-swiper-slide{
    color: #fff;
    display: flex;
    align-items: center;
}

h1{
   margin-left: 200px;
   margin-top: -30px;
   font-size: 60px;
   font-weight: 300;
   span{
    font-weight: 600;
    text-transform: uppercase;
   }
}

.swiper-slide h1{
    position: absolute;
}

.slider-controller {
    width: 100%;
    position: relative;
    bottom: 3rem;
}

.swiper-button-prev{
    width: 30px;
    height: 30px;
    color: #fff;
    left: 81%;
}
.swiper-button-prev::after{
    content:'';
}

.swiper-button-next{
    width: 30px;
    height: 30px;
    color: #fff;
    right: 13%;
}
.swiper-button-next::after{
    content:'';
}
.swiper-pagination-fraction{
    width: 10%;
    color: #fff;
    bottom: -15px;
    left: 86%;
}
.swiper-pagination-current{
    color: #FF9D02;
    font-weight: 700;
    font-size: 40px;
}
.swiper-pagination-total{
    font-size: 20px;
    font-weight: 500;
}
${'' /* swiper slider end */}
`;


const BannerSlider = () => {
    return (
        <Wrapper>
            <div className='banner-slider'>
                <Swiper
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'fraction',
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="banner-swiper"
                >
                    <SwiperSlide
                        className='banner-swiper-slide'
                        style={{ background: `url(${banner1}) rgba(0,0,0,0.5)` }}>
                        <h1 className='slider-heading'>
                            Welcome to <br /><span>bromag</span>
                        </h1>
                    </SwiperSlide>

                    <SwiperSlide className='banner-swiper-slide'
                        style={{ background: `url(${banner2}) rgba(0,0,0,0.5)` }}>
                        <h1 className='slider-heading'>

                        </h1>
                    </SwiperSlide>

                    <SwiperSlide className='banner-swiper-slide'
                        style={{ background: `url(${banner3}) rgba(0,0,0,0.5)` }}>
                        <h1 className='slider-heading'>

                        </h1>
                    </SwiperSlide>

                    <SwiperSlide className='banner-swiper-slide'
                        style={{ background: `url(${banner4}) rgba(0,0,0,0.5)` }}>
                        <h1 className='slider-heading'>

                        </h1>
                    </SwiperSlide>

                    <SwiperSlide className='banner-swiper-slide'
                        style={{ background: `url(${banner5}) rgba(0,0,0,0.5)` }}>
                        <h1 className='slider-heading'>

                        </h1>
                    </SwiperSlide>

                    <div className='slider-controller'>
                        <div className="swiper-button-prev">
                            <FaArrowLeftLong />
                        </div>
                        <div className="swiper-button-next">
                            <FaArrowRightLong />
                        </div>

                        <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal">
                            <span className="swiper-pagination-current">1</span> /
                            <span className="swiper-pagination-total">4</span>
                        </div>
                    </div>

                </Swiper>
            </div>
        </Wrapper>
    )
}
export default BannerSlider