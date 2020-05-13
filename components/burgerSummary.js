import React from 'react';
import styled from 'styled-components';
import * as variables from "../assets/variables";


const BurgerSummaryWrapper = styled.View`
background-color: ${variables.white};
padding: 30px;
height: 100%;
`;



const Title = styled.Text`
font-size: 25px;
font-weight: bold;
width: 60%;
margin: 20px auto;
color: ${variables.primaryYellow};
`;


const Paragraph = styled.Text`
width: 60%;
margin: 3px auto;
font-size: 16px;
`;

export default function BurgerSummary({burger, price}) {
    const meat = burger.meat;
    const cheese = burger.cheese;
    const salad = burger.salad;
    const bacon = burger.bacon;
    return (
        <BurgerSummaryWrapper>
                <Title>Your order</Title>
                <Paragraph>Meat: {meat}</Paragraph>
                <Paragraph>Cheese: {cheese}</Paragraph>
                <Paragraph>Salad: {salad}</Paragraph>
                <Paragraph>Bacon: {bacon}</Paragraph>
                <Paragraph>Price: {price}$</Paragraph>
        </BurgerSummaryWrapper>
    )
}
