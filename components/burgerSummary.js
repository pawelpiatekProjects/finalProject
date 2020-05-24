//-------------------------------
// Component which is used in orderSummary screen.
//-------------------------------

// imports
import React from 'react';
import styled from 'styled-components';
import * as variables from "../assets/variables";
import {Image} from 'react-native';

// styles
const BurgerSummaryWrapper = styled.View`
background-color: ${variables.white};
padding: 30px;

`;

const HeaderContainer = styled.View`
flex-direction: row;
align-items: center;
width: 80%;
margin: 0 auto 20px auto;
`;



const Title = styled.Text`
font-size: 25px;
font-weight: bold;
width: 80%;
margin: 20px auto;
color: ${variables.primaryYellow};
`;


const Paragraph = styled.Text`
width: 80%;
margin: 3px auto;
font-size: 16px;
`;

const Price = styled.Text`
font-size: 20px;
color: ${variables.primaryYellow};
text-align: center;
font-weight: bold;
margin-top: 30px;
border-top-color: ${variables.primaryYellow};
border-top-width: 3px;
`;

export default function BurgerSummary({burger, price}) {

    // props passed from orderSummary screen
    const meat = burger.meat;
    const cheese = burger.cheese;
    const salad = burger.salad;
    const bacon = burger.bacon;

    // returning and rendering components on the screen
    return (
        <BurgerSummaryWrapper>
            <Title>Your order</Title>
            <HeaderContainer>
                <Image source={require('../assets/burger-logo.png')} style={{width: 80, height: 50}}/>
            </HeaderContainer>


                <Paragraph>Meat: {meat}</Paragraph>
                <Paragraph>Cheese: {cheese}</Paragraph>
                <Paragraph>Salad: {salad}</Paragraph>
                <Paragraph>Bacon: {bacon}</Paragraph>
                <Price>Price: {price}$</Price>
        </BurgerSummaryWrapper>
    )
}
