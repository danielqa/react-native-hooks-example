import React from 'react';
import {ScrollView, View} from 'react-native';

import Indicadores from './components/Indicadores';
import Calendario from "./components/Calendario";
import styles from '../../styles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Indicadores/>
                <Calendario/>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
