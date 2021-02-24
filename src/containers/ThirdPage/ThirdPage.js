import React from 'react';
import styled,{css} from 'styled-components';
import Wrapper from '../../components/Wrapper/Wrapper';
import MobileImage from '../../assets/images/mobile.jpg';


const StyledDiv=styled.div`
     display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    height:60vh;
    width:100vw;
     
    .heading{
        flex-direction:column;
    }

    @media (max-width:600px){
            flex-direction:column-reverse;
            justify-content:space-around;
            height:80vh;
        }
`;

const MobileImg=styled.img`
    height:20rem;
    width:35rem; 
    padding:0 0;
    margin:0 0;
    @media (max-width:600px){
        height:15rem;
        width:20rem;
        }
`;


const Heading1=styled.p`
        
    font-size:4rem;
    font-weight:bolder;
    color:#fff;
    padding:1rem 5rem;
    padding-top:8rem;

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
    padding:0 2rem;
    @media (max-width:600px){
            font-size:1.5rem;
        }
`;

const thirdPage=(props)=>{
    return(
        <Wrapper>
            <StyledDiv>
            
                <MobileImg src={MobileImage}></MobileImg>
                <div className="heading">
                <Heading1>Download your shows<br/> to watch offline.</Heading1>
                <Heading2>Save your favourites easily and always have <br/>something to watch.</Heading2>
                </div>
            </StyledDiv>
        </Wrapper>

    );
}
export default thirdPage;