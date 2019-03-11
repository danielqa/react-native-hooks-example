/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Header, Icon, ListItem, SearchBar} from 'react-native-elements';
import SideMenu from 'react-native-side-menu';

import HomeScreen from "./src/screens/HomeScreen";
import styles from './src/styles';

export default class App extends Component {
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
            <SideMenu menu={<Menu/>}
                      isOpen={this.state.isSideMenuOpen}
                      onChange={isOpen => this.updateMenuState(isOpen)}>
                <View style={{
                    ...styles.container,
                    opacity: this.state.isSideMenuOpen ? 0.3 : 1,
                }}>
                    <Header
                        placement="left"
                        backgroundColor="#fff"
                        leftComponent={
                            <Icon type='font-awesome'
                                  name='bars'
                                  color='#333'
                                  onPress={this.toggle.bind(this)}/>
                        }
                        centerComponent={
                            <>
                                <Text style={{
                                    color: '#333',
                                    fontSize: 11,
                                    position: 'absolute',
                                    top: -10,
                                    left: 20,
                                }}>DOMINGO, 10 DE MARÇO</Text>
                                <Text style={{
                                    color: '#333',
                                    fontSize: 40,
                                    fontWeight: 'bold',
                                }}>SAJ ADV</Text>
                            </>
                        }
                    />
                    <HomeScreen/>
                </View>
            </SideMenu>
        );
    }
};

class Menu extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({search});
    };

    render() {
        const {search} = this.state;

        return (
            <ScrollView style={styles.menu}>
                <SearchBar
                    placeholder="Busca"
                    onChangeText={this.updateSearch}
                    value={search}
                    lightTheme={true}
                    round={true}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        borderTopWidth: null,
                        borderBottomWidth: null,
                    }}
                    inputContainerStyle={{
                        backgroundColor: '#F5FCFF',
                    }}
                />
                <ListItem
                    title="Painel de controle"
                    leftIcon={{type: 'font-awesome', name: 'calendar'}}
                />
                <ListItem
                    title="Notificações"
                    leftIcon={{type: 'font-awesome', name: 'exclamation-circle'}}
                    badge={{value: 3}}
                />
                <ListItem
                    title="Processos"
                    leftIcon={{type: 'font-awesome', name: 'gavel'}}
                />
                <ListItem
                    title="Pessoas"
                    leftIcon={{type: 'font-awesome', name: 'users'}}
                />
                <ListItem
                    title="Configurações"
                    leftIcon={{type: 'font-awesome', name: 'cogs'}}
                />
            </ScrollView>
        );
    }
}
