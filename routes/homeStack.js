import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from '../screens/home';
import BurgerBuilder from '../screens/burgerBuilder';



const screens ={
    Home: {
        screen: Home
    },
    BurgerBuilder: {
        screen: BurgerBuilder
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
