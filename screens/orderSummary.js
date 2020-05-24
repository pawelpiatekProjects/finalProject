//-------------------------------
// Screen with contains order summary
//-------------------------------

// imports
import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import ContactDataSummary from '../components/contactDataSummary';
import BurgerSummary from '../components/burgerSummary';
import CustomButton from '../components/button';
import * as variables from '../assets/variables';
import firebase from '../firebase';

// styles
const OrderSummaryWrapper = styled.View`
height: 100%;
background-color: ${variables.white};
`;

const SummaryContent = styled.View`

border-color: ${variables.primaryYellow};
border-width: 3px;
margin: 20px;
padding-bottom: 10px;
`;

// firebase database instance
const db = firebase.database();


export default function OrderSummary({navigation}) {

    // params which are passed from OrderData screen
    const contactData = navigation.getParam('contactData');
    const burger = navigation.getParam('burger');
    const price = navigation.getParam('price');


    // method which passes send new order to database and redirects user to OrderConfirm screen
    const createOrder = () =>{
        const key = db.ref().child('orders').push().key;
        db.ref(`orders/${key}`).set({
            key: key,
            burger: burger,
            price: price,
            contactData: contactData,
            date: new Date().toDateString()
        })
        navigation.navigate('OrderConfirm');
    }

    // returning and rendering components on the screen
    return (
        <OrderSummaryWrapper>
            <ScrollView>
                <SummaryContent>
                    <ContactDataSummary
                        contactData={contactData}
                    />
                    <BurgerSummary
                        burger={burger}
                        price={price}
                    />
                </SummaryContent>
                <CustomButton text="Confirm" press={createOrder}/>
            </ScrollView>
        </OrderSummaryWrapper>
    )
}
