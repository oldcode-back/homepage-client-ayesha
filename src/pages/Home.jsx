//styled-component imports

//component imports
import { Header, Footer, BannerSlider, About, Blogs, Features } from '../components'
//image imports
import FullStar from '../assets/images/full-star.svg'
import EmptyStar from '../assets/images/empty-star.svg'
import BestOffersSlider from '../components/homePageComponents/BestOffersSlider'
import Cuisines from '../components/homePageComponents/Cuisines'
// import topRightBg from '../assets/images/top-right-bg.svg'

const Home = () => {
    return (
        <div>
            <Header />

            <div className='page-content' style={{ paddingTop: '70px' }}>

                <section>
                    <BannerSlider />
                </section>

                <section className='card-section'>
                    <div className='card'>
                        <div className='card-row'>
                            <h5> Ratings</h5>
                            <p className='serving-from'>serving from</p>
                        </div>
                        <div className='card-row'>
                            <div className='ratings'>
                                <p>4.0</p>
                                <img src={FullStar} alt="" />
                                <img src={FullStar} alt="" />
                                <img src={FullStar} alt="" />
                                <img src={FullStar} alt="" />
                                <img src={EmptyStar} alt="" />
                            </div>
                            <p className='timings'>8:00AM to 11:00PM</p>
                        </div>
                    </div>
                </section>

                <section id='about' className='section'>
                    <About />
                </section>

                <section id='blogs' className='section2'>
                    <Blogs />
                </section>

                <section className='section'>
                    <div className='parent-div'>
                        <div className='left-div'>
                            <h2>Best offers</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim
                            </p>
                        </div>
                        <div className="right-div">
                            <BestOffersSlider />
                        </div>
                    </div>
                    {/* background div's start */}
                    <div className='top-right-bg'>
                        <div className='outer-circle'>
                            <div className='inner-circle'>
                            </div>
                        </div>
                    </div>

                    <div className='bottom-left'></div>
                    {/* background div's end */}
                </section>

                <section id='features' className='section'>
                    <Features />
                </section>


                <section id='features' className='section2'>
                    <Cuisines />
                </section>

                <section id='menu' style={{ width: "100vw", height: "50vh" }}>
                    <h5>menu</h5>
                </section>

                <section id='gallery' style={{ width: "100vw", height: "50vh" }}>
                    <h5>gallery</h5>
                </section>

            </div>
            <Footer />
        </div>
    )
}
export default Home;