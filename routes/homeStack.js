import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from '../screens/home';
import BurgerBuilder from '../screens/burgerBuilder';
import Order from '../screens/order';
import OrderData from '../screens/orderData';
import OrderSummary from '../screens/orderSummary';



const screens ={
    Home: {
        screen: Home
    },
    BurgerBuilder: {
        screen: BurgerBuilder
    },
    Order: {
        screen: Order
    },
    OrderData: {
        screen: OrderData
    },
    OrderSummary: {
        screen: OrderSummary
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
