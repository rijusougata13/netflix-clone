import React from 'react';

import styled,{css} from 'styled-components';

const StyledDiv=styled.div`
    width:65vw;
    height:8vh;
    box-sizing:border-box;
    background-color:rgba(59, 57, 57,1);
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;  
    padding-left:22rem;
    color:#fff;
    padding:0rem 0rem;
    font-size:2rem;
    font-weight:light;
    margin-bottom:0rem;
    @media (max-width:600px){
        font-size:1rem;
        padding:.3rem 0rem;

    }
`;


const questionBackground=(props)=>{
    return(
        <StyledDiv>
            
            {props.children}
      
        </StyledDiv>
    );
}

export default questionBackground;