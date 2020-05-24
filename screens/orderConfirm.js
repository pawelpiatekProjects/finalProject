//-------------------------------
// Screen with order confirmation
//-------------------------------

// imports
import React from 'react';
import styled from 'styled-components';
import * as variables from '../assets/variables';

//styles
const OrderConfirmWrapper = styled.View`
height: 100%;
align-items: center;
justify-content: center;
`;

const Modal = styled.View`
padding: 5px;
border-width: 5px;
border-color: ${variables.primaryGrey};
background-color: ${variables.white};
height: 50%;
width: 80%;
align-items: center;
justify-content: center;

`;

const Header = styled.Text`
color: ${variables.primaryYellow};
font-size: 30px;
font-weight: bold;
`;

const Button = styled.Button`

`;



export default function OrderConfirm({navigation}){

    // method which redirects us to Home screen
    const backToStart = () =>{
        navigation.navigate('Home')
    }

    // returning and rendering components on the screen
    return(
        <OrderConfirmWrapper>
            <Modal>
                <Header>Thank you for Order!!!</Header>
                <Button title="Home" onPress={backToStart} color={variables.primaryGrey}/>
            </Modal>
        </OrderConfirmWrapper>
    )
}
