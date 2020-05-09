import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from '../screens/home';
import BurgerBuilder from '../screens/burgerBuilder';
import Order from '../screens/order';



const screens ={
    Home: {
        screen: Home
    },
    BurgerBuilder: {
        screen: BurgerBuilder
    },
    Order: {
        screen: Order
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
