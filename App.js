/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {Text} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import SideMenu from 'react-native-side-menu';

import HomeScreen from "./src/screens/HomeScreen";

export default class App extends React.Component {
    state = {
        isSideMenuOpen: false
    };

    toggle() {
        this.setState({
            isSideMenuOpen: !this.state.isSideMenuOpen,
        });
    }

    updateMenuState(isSideMenuOpen) {
        this.setState({isSideMenuOpen});
    }

    render() {
        return (
            <>
                <SideMenu menu={<Menu/>}
                          isOpen={this.state.isSideMenuOpen}
                          onChange={isOpen => this.updateMenuState(isOpen)}>
                    <Header
                        placement="left"
                        leftComponent={
                            <Icon name='menu'
                                  color='#fff'
                                  onPress={this.toggle.bind(this)}/>
                        }
                        centerComponent={{text: 'SAJ ADV', style: {color: '#fff', fontSize: 40, fontWeight: 'bold'}}}
                    />
                    <HomeScreen/>
                </SideMenu>
            </>
        );
    }
};

const Menu = () => {
    return (
        <Text>MENU</Text>
    );
};
