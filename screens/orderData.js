import React from 'react';
import styled from 'styled-components';
import OrderForm from '../components/orderForm';
import {Header} from '../styles/globalStyle';
import {Keyboard} from 'react-native';

const OrderDataWrapper = styled.TouchableWithoutFeedback`

`;



export default function OrderData({navigation}) {

    const burger = navigation.getParam('burger');
    const price = navigation.getParam('price');
    const setData = (values)=>{


        const contactData = {
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            city: values.city,
            street: values.street,
            house: values.house
        }


        navigation.navigate('OrderSummary',{
            contactData: contactData,
            burger: burger,
            price: price
        });
    }
  return(

      <OrderDataWrapper onPress={()=>Keyboard.dismiss()}>
          <Header>Order data</Header>
          <OrderForm setData={setData}/>
      </OrderDataWrapper>
  )
}
