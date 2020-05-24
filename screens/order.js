import React from 'react';
import styled from 'styled-components';
import {BurgerBottom, BurgerTop, Meat, Cheese, Salad, Bacon} from '../components/ingredients';
import CustomButon from '../components/button';
import {Header}  from '../styles/globalStyle';



const OrderWrapper = styled.View`

`;



const Price = styled.Text`
text-align: center;
font-size: 20px;

margin: 20px auto;
`;

export default function Order({navigation}) {

    const burger = navigation.getParam('burger');
    const price = navigation.getParam('price');

    const meatArr = [];
    const cheeseArr = [];
    const baconArr = [];
    const saladArr = [];

    for (let i = 0; i < burger.meat; i++) {
        meatArr.push(<Meat/>)
    }

    for (let i = 0; i < burger.cheese; i++) {
        cheeseArr.push(<Cheese/>)
    }

    for (let i = 0; i < burger.salad; i++) {
        baconArr.push(<Salad/>)
    }

    for (let i = 0; i < burger.bacon; i++) {
        saladArr.push(<Bacon/>)
    }

    const purchase = ()=>{
        navigation.navigate('OrderData', {
            burger: burger,
            price: price
        })

    }

    return(
        <OrderWrapper>
            <Header>Your Order</Header>
            <BurgerTop/>
            {meatArr}
            {cheeseArr}
            {baconArr}
            {saladArr}
            <BurgerBottom/>
            <Price>{price}.0$</Price>
            <CustomButon text="Purchase" press={purchase}/>
        </OrderWrapper>
    )
}
