import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import * as variables from '../assets/variables';
import Home from '../screens/home';
import BurgerBuilder from '../screens/burgerBuilder';
import Order from '../screens/order';
import OrderData from '../screens/orderData';
import OrderSummary from '../screens/orderSummary';
import OrderConfirm from '../screens/orderConfirm';


const screens ={
    Home: {
        screen: Home,
        navigationOptions: {
            title: null,
        }
    },
    BurgerBuilder: {
        screen: BurgerBuilder,
        navigationOptions: {
            title: null,
        }
    },
    Order: {
        screen: Order,
        navigationOptions: {
            title: null,
        }
    },
    OrderData: {
        screen: OrderData,
        navigationOptions: {
            title: null,
        }
    },
    OrderSummary: {
        screen: OrderSummary,
        navigationOptions: {
            title: null,
        }
    },
    OrderConfirm:{
        screen: OrderConfirm,
        navigationOptions: {
            title: null,
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: variables.primaryGrey,
        },
        headerTintColor: variables.white
    }
});

export default HomeStack;
