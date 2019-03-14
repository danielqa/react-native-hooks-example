/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';

import AppContainer from './src/navigation/AppNavigator';

export default class App extends Component {

    render() {
        return (
            <AppContainer/>
        );
    }
};
