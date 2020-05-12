import React from 'react';
import styled from 'styled-components';
import OrderForm from '../components/orderForm';


const OrderDataWrapper = styled.View`

`;

const Header = styled.Text`

`;

export default function OrderData() {
  return(

      <OrderDataWrapper>
          <Header>Order data</Header>
          <OrderForm/>
      </OrderDataWrapper>
  )
}
