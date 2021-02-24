import React from 'react';
import styled,{css}from 'styled-components';

const StyledInput=styled.input`
        width:53vw;
        height:7vh;
        margin-left:-7rem;
        @media (max-width:600px){
            margin:0 0;
            
        }
`;
const inputField=(props)=>{
    return(<StyledInput/>);
}
export default inputField;