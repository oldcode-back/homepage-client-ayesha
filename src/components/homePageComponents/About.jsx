import styled from "styled-components"
import line from '../../assets/images/line.svg'
const Wrapper = styled.div`
padding: 20px;
.heading{
    display: flex;
    justify-content: center;
    column-gap: 20px;
    margin-top: 20px;
    h2{
        color: #A0A0A0;
        text-transform: uppercase;
        font-size: 50px;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 3.5px;
    }
}
.about-div{
    display: flex;
    align-items: center;
}
.about-img{
    width: 25%;
    background-color: #000;
    height: 400px;
    border-radius: 25px;
}
.about-content{
    width: 55%;
    padding: 40px;
    text-align: center;
    background: #F4F4F4;
    h4{
        font-family: Tangerine;
        color: #DF9300;
        font-size: 45px;
        font-weight: 400;
        letter-spacing: 3px;
        text-transform: capitalize;
        margin-bottom: -15px;
    }
    h3{
        color: #494949;
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: capitalize;
    }
    p{
        color: #5B5B5B;
        font-size: 20px;
        text-align: start;
    }
}
`;

const About = () => {
    return (
        <Wrapper>
            <div className="heading">
                <img src={line} alt="" />
                <h2>about us</h2>
                <img src={line} alt="" />
            </div>

            <div className="about-div">
                <div className="about-img"></div>
                <div className="about-content">
                    <h4>discover</h4>
                    <h3> our story</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate </p>
                </div>
                <div className="about-img"></div>
            </div>
        </Wrapper>
    )
}
export default About