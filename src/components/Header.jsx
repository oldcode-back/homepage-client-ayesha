//styled-component imports
import Wrapper from '../assets/wrappers/Header'
//image imports
import logo from '../assets/images/logo.png'
//react imports
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'

const Header = () => {
    const [isActive, setIsActive] = useState('');

    return (
        <Wrapper>
            <div className='navbar'>
                <div className='brand'>
                    <img src={logo} alt="logo" />
                </div>

                <div className='nav-links'>

                    <HashLink to="/" smooth className={isActive === "home" ? 'active' : ''} onClick={() => {
                        setIsActive("home");
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    }>
                        Home
                    </HashLink>

                    <HashLink to="#about" smooth className={isActive === "about" ? 'active' : ''} onClick={() => setIsActive("about")}>
                        About us
                    </HashLink>

                    <HashLink to="#features" smooth className={isActive === "features" ? 'active' : ''} onClick={() => setIsActive("features")}>
                        Features
                    </HashLink>

                    <HashLink to="#menu" smooth className={isActive === "menu" ? 'active' : ''} onClick={() => setIsActive("menu")}>
                        Menu
                    </HashLink>

                    <HashLink to="#blogs" smooth className={isActive === "blogs" ? 'active' : ''} onClick={() => setIsActive("blogs")}>
                        Blogs
                    </HashLink>

                    <HashLink to="#gallery" smooth className={isActive === "gallery" ? 'active' : ''} onClick={() => setIsActive("gallery")}>
                        Gallery
                    </HashLink>

                </div>
            </div>
        </Wrapper>
    )
}
export default Header