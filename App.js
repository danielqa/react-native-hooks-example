/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import TesteHook from "./components/TesteHook";

const App = () => {
    let text = '';
    const [description, setDescription] = useState('Testando React Hooks on React Native for SAJ ADV');

    const onChangeTextInput = textInputed => {
        text = textInputed;
    };

    const onPressButton = () => {
        setDescription(text);
    };

    return (
        <View style={styles.container}>
            <TesteHook text={description}/>
            <TextInput onChangeText={onChangeTextInput}/>
            <Button onPress={onPressButton} title="Click Here"/>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
