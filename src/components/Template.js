import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {ListItem, SearchBar} from 'react-native-elements';

import styles from "../styles";

export const Header = () => {
    return (
        <View>
            <Text style={{
                color: '#333',
                fontSize: 9,
                top: 5,
            }}>DOMINGO, 10 DE MARÇO</Text>
            <Text style={{
                color: '#333',
                fontSize: 32,
                fontWeight: 'bold',
            }}>SAJ ADV</Text>
        </View>
    );
};

export default class Menu extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({search});
    };

    render() {
        const {search} = this.state;

        return (
            <ScrollView>
                <SafeAreaView style={styles.menu}>
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
                </SafeAreaView>
            </ScrollView>
        );
    }
}
