import React from 'react';
import styled,{css} from 'styled-components';
import Logo from '../Logo/Logo';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
const navbar=(props)=>(
    
    <Wrapper navbar> 
        <Logo/>
        <Button signIn>Sign In</Button>
    </Wrapper>
);

export default navbar;
