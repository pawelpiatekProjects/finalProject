import {createStackNavigator} from "react-navigation-stack";
import * as variables from '../assets/variables';
import Orders from '../screens/orders';



const screens ={
    Orders: {
        screen: Orders,
        navigationOptions: {
            title: null,
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
