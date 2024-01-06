//styled-component imports

//component imports
import { Header, Footer, BannerSlider, About } from '../components'
//image imports
import FullStar from '../assets/images/full-star.svg'
import EmptyStar from '../assets/images/empty-star.svg'


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
                            <h4> Ratings</h4>
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

                <section id='features' style={{ width: "100vw", height: "50vh" }}>
                    <h5>features</h5>
                </section>

                <section id='menu' style={{ width: "100vw", height: "50vh" }}>
                    <h5>menu</h5>
                </section>

                <section id='blogs' style={{ width: "100vw", height: "50vh" }}>
                    <h5>blogs</h5>
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