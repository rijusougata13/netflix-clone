import React from 'react';
import styled,{css} from 'styled-components';
import Wrapper from '../../components/Wrapper/Wrapper';

const StyledDiv=styled.div`
    font-size:.9rem;
    display:flex;
    padding: 21rem 12rem;
    justify-content:space-between;
    align-items:center;
    padding:1rem 1rem;
    margin:2rem 2rem;
`;

const sixthPage=(props)=>(
    <Wrapper>
        <StyledDiv>Questions? Call 000-800-040-1843</StyledDiv>
        <Wrapper>
        <div className="endPage">
        <StyledDiv>FAQ</StyledDiv>
        <StyledDiv>Hep Center</StyledDiv>
        <StyledDiv>Account</StyledDiv>
        <StyledDiv>Media Center</StyledDiv>
        <StyledDiv>Inverstor</StyledDiv>
        <StyledDiv>Jobs</StyledDiv>
        <StyledDiv>Ways to Watch</StyledDiv>
        <StyledDiv>Terms of Use</StyledDiv>
        <StyledDiv>Privacy</StyledDiv>
        <StyledDiv>Cookie Preferences</StyledDiv>
        <StyledDiv>Corporate</StyledDiv>
        </div>
        </Wrapper>
    </Wrapper>

);

export default sixthPage;