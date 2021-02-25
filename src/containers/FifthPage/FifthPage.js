import React from 'react';
import styled,{css} from 'styled-components';
import Wrapper from '../../components/Wrapper/Wrapper';
import QuestionBackground from '../../components/QuestionBackground/QuestionBackground';
import InputField from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const StyledDiv=styled.div`
     display:flex;
    flex-direction:column;
    align-items:center;
    height:70vh;
    width:100vw;
    background-color:black;
    justify-content:space-around;
    margin:1rem 2rem;
    @media (max-width:600px){
            flex-direction:column;
            justify-content:space-around;
            height:80vh;
        }
        .wrap{
            padding:.7rem 1rem;

            @media (max-width:600px){
                padding:.3rem .5rem;
            }
        }
    
       
`;

const Heading1=styled.p`
    
    font-size:4rem;
    font-weight:bolder;
    color:#fff;
    padding:1rem 5rem;
    padding-top:1rem;

    @media (max-width:600px){
            font-size:2rem;
            margin-top:2rem;
            padding-top: 3.3rem;
            padding-left:1rem;
            padding-right:1rem;
            font-weight:bold;
        }
`;

const Heading3=styled.p`
    
    color:#fff;
    font-size:1.5rem;
    font-weight:lighter;
    padding:1rem 0;
    @media (max-width:600px){
            font-size:1rem;
        }

`;

const fifthPage=()=>{
    const questions=[
        {
            "heading":"What is Netflix?",
            "body":"",
        },
        {
            "heading":"How much does Netflix cost?",
            "body":"",
        },
        {
            "heading":"Where can I watch?",
            "body":"",
        },
        {
            "heading":"How do I cancel?",
            "body":"",
        },
        {
            "heading":"What can I watch on Netflix?",
            "body":"",
        }
    ];
    return(
        <Wrapper>


            <StyledDiv>
            <Heading1>Frequently Asked Questions</Heading1>

            {
                questions.map(question=>(
                    
                    
            <QuestionBackground> <div className="wrap">{question.heading}</div> <div className="wrap">  +</div> </QuestionBackground>
            
             ))
            }


        </StyledDiv>
            
            <Heading3>Ready to watch? Enter your email to create or restart your membership.</Heading3>
            <div className="inputField">
                <InputField/>
                <Button>Get Started ></Button>
            </div>
        </Wrapper>
    );
}

export default fifthPage;