//-------------------------------
// Component which is used in orderSummary screen.
//-------------------------------

// imports
import React from 'react';
import styled from 'styled-components';
import * as variables from '../assets/variables';

// styles
const Title = styled.Text`
font-size: 25px;
font-weight: bold;
width: 80%;
margin: 20px auto;
color: ${variables.primaryYellow};
`;

const ContactDataSummaryWrapper = styled.View`
background-color: ${variables.white};
padding: 30px;
`;


const Paragraph = styled.Text`
width: 80%;
margin: 3px auto;
font-size: 16px;
`;

export default function ContactDataSummary({contactData}){

    // returning and rendering components on the screen
    return(
        <ContactDataSummaryWrapper>
            <Title>Contact data</Title>
            <Paragraph>Name: {contactData.name}</Paragraph>
            <Paragraph>Last name: {contactData.lastName}</Paragraph>
            <Paragraph>E-mail: {contactData.email}</Paragraph>
            <Paragraph>Phone number: {contactData.phone}</Paragraph>
            <Paragraph>City: {contactData.city}</Paragraph>
            <Paragraph>Street: {contactData.street}</Paragraph>
            <Paragraph>House: {contactData.house}</Paragraph>
        </ContactDataSummaryWrapper>
    )
}
