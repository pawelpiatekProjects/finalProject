import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import ContactDataSummary from '../components/contactDataSummary';
import BurgerSummary from '../components/burgerSummary';
import CustomButton from '../components/button';
import * as variables from '../assets/variables';

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


export default function OrderSummary({navigation}) {

    const contactData = navigation.getParam('contactData');
    const burger = navigation.getParam('burger');
    const price = navigation.getParam('price');
    console.log(price);
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
                <CustomButton text="Confirm" press={() => {
                }}/>
            </ScrollView>
        </OrderSummaryWrapper>
    )
}
