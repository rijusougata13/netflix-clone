import React from 'react';
import styled,{css} from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Wrapper from '../../components/Wrapper/Wrapper';
import IntroBody from './IntroBody/IntroBody';
import BackgroundImage from  '../../assets/images/netflixBackground.jfif'; 
import InputField from '../../components/Input/Input';
import Button from '../../components/Button/Button';


const Heading1=styled.p`
    font-size:2rem;
`;

const ImgBody=styled.div`
    background-image:url(${BackgroundImage});
    height:90vh;
    width:100vw;
    .overlay  {
        width:100vw;
        height:100vh;
        background:rgba(3, 4, 1, 0.4);
    }
    .inputField{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;

        @media (max-width:600px){
            flex-direction:column;
            justify-content:space-around;
        }
    }
`;

const introPage=(props)=>{
    return(
        <ImgBody >
            <div className="overlay">
            <Navbar></Navbar>
            <IntroBody>
            </IntroBody>
            <div className="inputField">
                <InputField/>
                <Button>Get Started ></Button>
            </div>
            </div>
        </ImgBody>
    );
}
export default introPage;