import React from 'react';
import styled,{css}from 'styled-components';
import BackgroundImage from '../../assets/images/netflixBackground.jfif'; 


const IMG=styled.img`
        position:relative;
        opacity:.21;
        height:90vh;
        width:100vw;
        margin-top:-10vh;
        z-index:111;

    
`;

const backgroundImg=(props)=>{
    return(
       
        <IMG src={BackgroundImage}></IMG>
        
    );
}

export default backgroundImg;