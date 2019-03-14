import React from 'react';
import {createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';

import Menu, {Header} from "../components/Template";
import HomeScreen from "../screens/HomeScreen";
import {Icon} from "react-native-elements";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
}, {
    defaultNavigationOptions: ({navigation}) => ({
        headerTitle: <Header/>,
        headerStyle: {
            backgroundColor: '#fff',
            height: 60,
        },
        headerLeft: (
            <Icon type='font-awesome'
                  name='bars'
                  color='#333'
                  onPress={navigation.toggleDrawer}/>
        ),
        headerLeftContainerStyle: {
            marginLeft: 15
        }
    })
});

const DrawerNavigator = createDrawerNavigator({
    Main: HomeStack,
}, {
    contentComponent: props => <Menu {...props} />,
});

const AppNavigator = createStackNavigator({
    Main: DrawerNavigator,
}, {
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);
