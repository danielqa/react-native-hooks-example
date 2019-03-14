import React from 'react';
import {Icon} from "react-native-elements";
import {createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';

import Header from "../components/layout/Header";
import Menu from "../components/layout/Menu";
import HomeScreen from "../screens/Home/HomeScreen";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
}, {
    defaultNavigationOptions: ({navigation}) => ({
        headerTitle: <Header/>,
        headerStyle: {
            backgroundColor: '#fff',
            height: 70,
        },
        headerLeft: (
            <Icon type='font-awesome'
                  name='bars'
                  color='#333'
                  onPress={navigation.toggleDrawer}/>
        ),
        headerLeftContainerStyle: {
            marginLeft: 15,
            marginTop: 15,
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
