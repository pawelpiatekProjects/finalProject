//-------------------------------
// Drawer navigation
//-------------------------------

// imports
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import OrdersStack from './ordersStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    Orders: {
        screen: OrdersStack
    }
});

export default createAppContainer(RootDrawerNavigator);


