import React from 'react';
import styled from 'styled-components';
import * as variables from '../assets/variables';

const OrderConfirmWrapper = styled.View`
height: 100%;
align-items: center;
justify-content: center;
`;

const Modal = styled.View`
background-color: ${variables.white};
height: 50%;
width: 90%;
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

    const backToStart = () =>{
        navigation.navigate('Home')
    }

    return(
        <OrderConfirmWrapper>
            <Modal>
                <Header>Thank you for Order!!!</Header>
                <Button title="Home" onPress={backToStart} color={variables.primaryYellow}/>
            </Modal>
        </OrderConfirmWrapper>
    )
}
