//-------------------------------
// Orders stack - stack navigation which is used in drawer navigation
//-------------------------------

// imports
import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import * as variables from '../assets/variables';
import Orders from '../screens/orders';
import Header from '../shared/header';


const screens ={
    Orders: {
        screen: Orders,
        navigationOptions: ({navigation}) =>{
            return {
                headerTitle: ()=> <Header navigation={navigation}/>,
            }
        }
    }
}

const OrderStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: variables.primaryGrey,
        },
        headerTintColor: variables.white
    }
});

export default OrderStack;
