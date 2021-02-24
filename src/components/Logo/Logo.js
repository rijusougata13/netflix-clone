import React from 'react';
import styled,{css} from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';
import logoImg from '../../assets/images/Netflix.png';

// const Logo =styled.div`
//     background-image:url(${logoImg}) ;
// `;

const Logo = styled.img`
    width: 5rem;
    height: 3rem;
    margin-left:2rem;
`;
const logo=(props)=>(
        <Logo src={logoImg}></Logo>
);

export default logo;
