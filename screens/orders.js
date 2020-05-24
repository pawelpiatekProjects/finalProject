//-------------------------------
// Screen with contains all orders fetched from server
//-------------------------------

// imports
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native'
import styled from 'styled-components';
import {Header} from '../styles/globalStyle';
import firebase from '../firebase';
import Order from '../components/order';
import Spinner from "../components/spinner";

// firebase database instance
const db = firebase.database();

// styles
const OrdersWrapper = styled.View`
  margin-bottom: 30px;
`;

export default function Orders() {
    // state which contains all orders
    const [data, setData] = useState([]);

    // state which is used to change loading animation
    const [isLoading, setIsLoading] = useState(true);

    // useEffect is used to fetch data from server before all components are rendered
    useEffect(() => {
        fetch();
    },)

    // method which fetches all data from firebase
    const fetch = async () => {

        db.ref('/orders').once('value')
            .then(snapshot => {
                const orders = snapshot.val();
                const arr = Object.keys(orders).map(el => {
                    return orders[el];
                })
                setIsLoading(false);
                setData(arr);

            })
    }

    // method which deletes single, selected order
    const deleteOrder = (key) => {
        console.log(key)
        let orderRef = db.ref(`orders/${key}`);
        orderRef.remove();
        fetch();
    }

    // returning and rendering components on the screen
    return (
        <ScrollView>
            <OrdersWrapper>
                <Header>Orders</Header>

                {/*checking if data from server are still being fetched*/}
                {isLoading ? (
                    <Spinner/>
                ) : (
                    data.map(el => (
                        <Order data={el} press={deleteOrder}/>
                    ))
                )}


            </OrdersWrapper>
        </ScrollView>
    )
}
