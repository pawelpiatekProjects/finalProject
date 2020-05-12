import React from 'react';
import styled from 'styled-components';
import OrderForm from '../components/orderForm';
import {Header} from '../styles/globalStyle';


const OrderDataWrapper = styled.View`

`;



export default function OrderData() {
  return(

      <OrderDataWrapper>
          <Header>Order data</Header>
          <OrderForm/>
      </OrderDataWrapper>
  )
}
