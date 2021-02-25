import React from 'react';
import styled,{css} from 'styled-components';
import Img from "../../assets/images/netflixBackground.jfif";



const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:black;
    color:#fff;
    width:100vw;
    
    .inputField{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        margin-bottom:5rem;
        background:transparent;
        @media (max-width:600px){
            flex-direction:column;
        }
    }
    .endPage{
        display:flex;
        flex-wrap:wrap;
    }
    ${({img})=>
    img && 
    css`
    background-color:green;
    `}
    ${({navbar})=>
    navbar && 
    css`   
        justify-content:space-between;
        height:10vh;
        width:100vw;
        flex-direction:row;
        background:transparent;
    `}

    ${({introbody})=>
    introbody && 
    css`   
        justify-content:space-between;
        flex-direction:column !important;
        height:90vh;
        width:100vw;
        bottom:0;
        /* margin-top:5rem; */
        padding:20rem 20rem;
        
    `}
`;

const wrapper=(props)=>{
    return(
        <Wrapper navbar={props.navbar}>{props.children}</Wrapper>
    );
}
export default wrapper;