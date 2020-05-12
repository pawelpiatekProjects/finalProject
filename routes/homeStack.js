import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from '../screens/home';
import BurgerBuilder from '../screens/burgerBuilder';
import Order from '../screens/order';
import OrderData from '../screens/orderData';



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
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
