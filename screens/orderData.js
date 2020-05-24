//-------------------------------
// Screen with contains contact form component
//-------------------------------

// imports
import React from 'react';
import styled from 'styled-components';
import OrderForm from '../components/orderForm';
import {Header} from '../styles/globalStyle';
import * as variables from '../assets/variables';

// styles
const OrderDataWrapper = styled.View`
background: ${variables.white};
height: 100%;
`;


export default function OrderData({navigation}) {

    // params which are passed from Order screen
    const burger = navigation.getParam('burger');
    const price = navigation.getParam('price');

    // method which is used in orderForm component to get contact data from form and pass this data to OrderSummary screen
    const setData = (values) => {

        const contactData = {
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            city: values.city,
            street: values.street,
            house: values.house
        }


        navigation.navigate('OrderSummary', {
            contactData: contactData,
            burger: burger,
            price: price
        });
    }

    // returning and rendering components on the screen
    return (

        <OrderDataWrapper>
            <Header>Order data</Header>
            <OrderForm setData={setData}/>
        </OrderDataWrapper>
    )
}
