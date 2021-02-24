import React from 'react';
import styled,{css} from 'styled-components';
import Wrapper from '../../components/Wrapper/Wrapper';
import LaptopImage from '../../assets/images/laptop.png';

const StyledDiv=styled.div`
     display:flex;
    flex-direction:row;
    align-items:center;
    height:60vh;
    width:100vw;
    background-color:black;
    justify-content:space-around;
    @media (max-width:600px){
            flex-direction:column;
            justify-content:space-around;
            height:80vh;
        }
`;

const Heading1=styled.p`
        
    font-size:4rem;
    font-weight:bolder;
    color:#fff;
    padding:2rem;
    @media (max-width:600px){
            font-size:2rem;
            margin-top:2rem;
            padding-top: 3.3rem;
            padding-left:2rem;
            padding-right:2rem;
            font-weight:bold;
        }
`;

const Heading2=styled.p`

    color:#fff;
    font-size:2rem;
    font-weight:light;

    @media (max-width:600px){
            font-size:1rem;
            padding:1rem 1rem;
        }
`;

const LaptopImg=styled.img`
    height:20rem;
    width:35rem; 
    padding:0 0;
    margin:0 5rem;
    @media (max-width:600px){
        height:15rem;
        width:20rem;
        }
`;

const fourthPage=(props)=>{

    return(
            <StyledDiv>
            <StyledDiv>
            <Wrapper>
            <Heading1>
            Enjoy on your TV.
            </Heading1>
            <Heading2>Watch on smart TVs, PlayStation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players and <br/> more.</Heading2>
            </Wrapper>
            <LaptopImg src={LaptopImage}></LaptopImg>
            </StyledDiv>
            </StyledDiv>
    );
}

export default fourthPage;