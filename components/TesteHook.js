import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';

const TesteHook = ({text}) => {

    useEffect(() => {
        console.log('It works: ', text);
    }, [text]);

    return (
        <Text style={styles.welcome}>{text}</Text>
    );
};

export default TesteHook;

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
