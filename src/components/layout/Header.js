import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
    return (
        <View>
            <Text style={{
                color: '#333',
                fontSize: 12,
                top: 5,
            }}>DOMINGO, 10 DE MARÇO</Text>
            <Text style={{
                color: '#333',
                fontSize: 36,
                fontWeight: 'bold',
            }}>SAJ ADV</Text>
        </View>
    );
};

export default Header;
