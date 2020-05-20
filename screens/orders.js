import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native'
import styled from 'styled-components';
import {Header} from '../styles/globalStyle';
import firebase from '../firebase';

const db = firebase.database();

const OrdersWrapper = styled.View`

`;

export default function Orders() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch();
    },[])

    const fetch = async () =>{
        db.ref('/orders').once('value')
            .then(snapshot=>{
                const orders = snapshot.val();
                const arr = Object.keys(orders).map(el=>{
                    return orders[el];
                })
                setData(arr);
            })
    }

    return(
        <OrdersWrapper>
            <Header>Orders</Header>
            {data.map(el=>(
                <Text>{el.contactData.name}</Text>
            ))}
        </OrdersWrapper>
    )
}
