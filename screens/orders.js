import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native'
import styled from 'styled-components';
import {Header} from '../styles/globalStyle';
import firebase from '../firebase';
import Order from '../components/order';
import Spinner from "../components/spinner";

const db = firebase.database();

const OrdersWrapper = styled.View`

`;

export default function Orders() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch();
    },)

    const fetch = async () =>{

        db.ref('/orders').once('value')
            .then(snapshot=>{
                const orders = snapshot.val();
                const arr = Object.keys(orders).map(el=>{
                    return orders[el];
                })
                setIsLoading(false);
                setData(arr);

            })
    }

    const deleteOrder = (key) =>{
        console.log(key)
        let orderRef = db.ref(`orders/${key}`);
        orderRef.remove();
        fetch();
    }
//todo: add loading annimation
    return(
        <OrdersWrapper>
            <Header>Orders</Header>
            {isLoading ? (
                <Spinner/>
            ): (
                data.map(el=>(
                        <Order data={el} press={deleteOrder}/>
                    ))
            )}



        </OrdersWrapper>
    )
}
