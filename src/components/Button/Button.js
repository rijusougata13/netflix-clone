import React from 'react';
import styled,{css}from 'styled-components';

const StyledButton=styled.button`

    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap');
    font-family: 'Nunito Sans', sans-serif;
    font-size:1rem;
    padding:1.3rem 1rem;
    background:red;
    border:none;
    margin:1rem -7.9rem;
    @media (max-width:600px){
            padding:.4rem .4rem;
        }
    ${({signIn})=>
    signIn && 
    css`   
        box-sizing:border-box;
        border-radius:5px;
        padding:.4rem .4rem;
        margin:0 2rem;

    `}
`;
const Button=(props)=>{
    return(
        <StyledButton signIn={props.signIn} >{props.children}</StyledButton>
    );
}

export default Button;