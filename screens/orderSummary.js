import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import ContactDataSummary from '../components/contactDataSummary';
import BurgerSummary from '../components/burgerSummary';
import CustomButton from '../components/button';
import * as variables from '../assets/variables';
import firebase from '../firebase';

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


const db = firebase.database();


export default function OrderSummary({navigation}) {

    const contactData = navigation.getParam('contactData');
    const burger = navigation.getParam('burger');
    const price = navigation.getParam('price');
    console.log(price);

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
