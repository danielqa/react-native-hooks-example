import React from 'react';
import {View} from "react-native";
import {Calendar} from "react-native-calendars";
import {Badge, ListItem, Text} from "react-native-elements";
import {FiltroRapidoButton, FiltrosRapidos} from "./styles";

const list = [
    {
        title: 'Agravo de instrumento',
        time: '08:00',
        description: 'I started doing UI kits! Can you help ...',
    },
    {
        title: 'Agravo de instrumento',
        time: '08:00',
        description: 'I started doing UI kits! Can you help ...',
    },
    {
        title: 'Agravo de instrumento',
        time: '08:00',
        description: 'I started doing UI kits! Can you help ...',
    },
    {
        title: 'Agravo de instrumento',
        time: '08:00',
        description: 'I started doing UI kits! Can you help ...',
    },
    {
        title: 'Agravo de instrumento',
        time: '08:00',
        description: 'I started doing UI kits! Can you help ...',
    }
];

const Calendario = () => {
    return (
        <View>
            <Calendar/>
            <Text h4 style={{padding: 20}}>Atividades do dia</Text>
            <FiltrosRapidos horizontal={true}>
                <FiltroRapidoButton
                    title="Todas"
                    type="outline"
                    style={{marginLeft: 15}}
                    icon={
                        <Badge value="15" status="primary"/>
                    }
                />
                <FiltroRapidoButton
                    title="Tarefas"
                    type="outline"
                    icon={
                        <Badge value="03" status="warning"/>
                    }
                />
                <FiltroRapidoButton
                    title="Audiências"
                    type="outline"
                    icon={
                        <Badge value="02" status="error"/>
                    }
                />
                <FiltroRapidoButton
                    title="Compromissos"
                    type="outline"
                    icon={
                        <Badge value="10" status="success"/>
                    }
                />
            </FiltrosRapidos>
            <View>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            subtitle={
                                <>
                                    <Text>{item.time}</Text>
                                    <Text>{item.description}</Text>
                                </>
                            }
                            rightAvatar={{source: require('../../../../../assets/images/avatar.png')}}
                        />
                    ))
                }
            </View>
        </View>
    );
};

export default Calendario;
