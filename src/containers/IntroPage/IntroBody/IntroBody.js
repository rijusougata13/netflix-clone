import React from 'react';
import styled,{css} from 'styled-components';
import wrapper from '../../../components/Wrapper/Wrapper';
import Background from '../../../assets/images/netflixBackground.jfif';
import BackgroundImg from '../../../components/BackgroundImg/BackgroundImg';
import Wrapper from '../../../components/Wrapper/Wrapper';
import BackgroundImage from  '../../../assets/images/netflixBackground.jfif'; 



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
            padding-left:1rem;
            padding-right:1rem;
            font-weight:bold;
        }
`;

const Heading2=styled.p`

    color:#fff;
    font-size:2rem;
    font-weight:bold;
    padding:0 0;
    @media (max-width:600px){
            font-size:1.5rem;
        }
`;

const Heading3=styled.p`

    color:#fff;
    font-size:1.5rem;
    font-weight:bold;
    padding:1rem 0;
    @media (max-width:600px){
            font-size:1rem;
        }

`;



const introBody=(props)=>(
    <wrapper introbody >
                    <Heading1>
                    Unlimited movies, TV <br/> shows and more.
                    </Heading1>
                    <Heading2>
                    Watch anywhere. Cancel anytime.
                    </Heading2>
                    <Heading3>
                    Ready to watch? Enter your email to create or restart your membership.
                    </Heading3>
    </wrapper>

);

export default introBody;
