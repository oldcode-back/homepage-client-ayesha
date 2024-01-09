//styled-component imports
import styled from 'styled-components';

//swiper imports
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

//image imports
import bsImage1 from '../../assets/images/bestOffersImages/bs-img-1.png'
import bsImage2 from '../../assets/images/bestOffersImages/bs-img-2.png'
import bsImage3 from '../../assets/images/bestOffersImages/bs-img-3.png'


const Wrapper = styled.div`
${'' /* swiper styles start  */}
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 80px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 350px;
  height: 400px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  border-radius: 25px;

}
.swiper-pagination{
    display: flex;
    align-items: center;
    justify-content: center;
}
.swiper-pagination-bullet-active{
    background: #000 !important;
    width: 12px;
    height: 12px;
}
${'' /* swiper styles end  */}
`;


const BestOffersSlider = () => {


    return (
        <Wrapper>
            <Swiper
                effect={'coverflow'}
                loop={true}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 500,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={bsImage1} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={bsImage3} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={bsImage2} />
                </SwiperSlide>

            </Swiper>
        </Wrapper>
    )
}
export default BestOffersSlider