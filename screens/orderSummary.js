import React from 'react';
import styled from 'styled-components';
import {Header} from '../styles/globalStyle';
import ContactDataSummary from '../components/contactDataSummary';
import BurgerSummary from '../components/burgerSummary';

const OrderSummaryWrapper = styled.View`

`;



export default function OrderSummary({navigation}) {

    const contactData = navigation.getParam('contactData');
    const burger = navigation.getParam('burger');
    const price = navigation.getParam('price');
    console.log(price);
    return(
        <OrderSummaryWrapper>

            <ContactDataSummary
                contactData={contactData}
            />
            <BurgerSummary
                burger={burger}
                price={price}
            />
        </OrderSummaryWrapper>
    )
}
