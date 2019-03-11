import React from 'react';
import {View, ScrollView} from 'react-native';
import {Badge, Button, Card, ListItem, Text} from 'react-native-elements';
import {Calendar} from 'react-native-calendars';
import {PieChart} from 'react-native-svg-charts';
import styled from 'styled-components/native';

const Indicadores = styled.ScrollView`
    padding-bottom: 20px;
`;

const IndicadorCard = styled(Card).attrs(props => ({
    containerStyle: {
        paddingTop: 15,
        paddingRight: 0,
        paddingBottom: 15,
        paddingLeft: 0,
        marginLeft: props.style ? props.style.marginLeft : 0,
    }
}))``;

const IndicadorItem = styled.View`
    width: 130px;
    height: 100px;
`;

const IndicadorTitle = styled.Text`
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
    font-size: 15px;
`;

const IndicadorCalendario = styled.View`
    width: 65px;
`;

const IndicadorChart = styled.View`
    position: absolute;
    top: 47%;
    left: 39%;
`;

const IndicadorChartLabel = styled.Text`
    font-size: 26px;
`;

const CalendarioMes = styled.View`
    background-color: #f44336;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
`;

const CalendarioMesText = styled.Text`
    color: #fff;
    text-align: center;
    text-transform: capitalize;
`;

const CalendarioDia = styled.View`
    background-color: #fff;
    border-left-width: 1px;
    border-left-color: #b7c6cd;
    border-right-width: 1px;
    border-right-color: #b7c6cd;
    border-bottom-width: 1px;
    border-bottom-color: #b7c6cd;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
`;

const CalendarioDiaText = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
`;

const FiltrosRapidos = styled.ScrollView`
    padding-bottom: 20px;
`;

const FiltroRapidoButton = styled(Button).attrs(props => ({
    buttonStyle: {
        borderRadius: 20,
    },
    containerStyle: {
        overflow: 'hidden',
        marginLeft: props.style?.marginLeft,
        marginRight: 10,
    }
}))``;

const data = [50, 50, 100];
const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7);
const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
        value,
        svg: {
            fill: randomColor(),
            onPress: () => console.log('press', index),
        },
        key: `pie-${index}`,
    }));
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

const HomeScreen = () => {
    return (
        <ScrollView>
            <Indicadores horizontal={true}>
                <IndicadorCard style={{marginLeft: 15}}>
                    <IndicadorItem>
                        <IndicadorTitle>Calendário</IndicadorTitle>
                        <View style={{alignItems: 'center'}}>
                            <IndicadorCalendario>
                                <CalendarioMes>
                                    <CalendarioMesText>março</CalendarioMesText>
                                </CalendarioMes>
                                <CalendarioDia>
                                    <CalendarioDiaText>10</CalendarioDiaText>
                                </CalendarioDia>
                            </IndicadorCalendario>
                        </View>
                    </IndicadorItem>
                </IndicadorCard>
                <IndicadorCard>
                    <IndicadorItem>
                        <IndicadorTitle>Tarefas</IndicadorTitle>
                        <PieChart
                            innerRadius="85%"
                            style={{height: 60}}
                            data={pieData}
                        />
                        <IndicadorChart>
                            <IndicadorChartLabel>40</IndicadorChartLabel>
                        </IndicadorChart>
                    </IndicadorItem>
                </IndicadorCard>
                <IndicadorCard>
                    <IndicadorItem>
                        <IndicadorTitle>Intimações</IndicadorTitle>
                        <PieChart
                            innerRadius="85%"
                            style={{height: 60}}
                            data={pieData}
                        />
                        <IndicadorChart>
                            <IndicadorChartLabel>20</IndicadorChartLabel>
                        </IndicadorChart>
                    </IndicadorItem>
                </IndicadorCard>
                <IndicadorCard>
                    <IndicadorItem>
                        <IndicadorTitle>Andamentos</IndicadorTitle>
                        <PieChart
                            innerRadius="85%"
                            style={{height: 60}}
                            data={pieData}
                        />
                        <IndicadorChart>
                            <IndicadorChartLabel>27</IndicadorChartLabel>
                        </IndicadorChart>
                    </IndicadorItem>
                </IndicadorCard>
                <IndicadorCard>
                    <IndicadorItem>
                        <IndicadorTitle>Audiências</IndicadorTitle>
                        <PieChart
                            innerRadius="85%"
                            style={{height: 60}}
                            data={pieData}
                        />
                        <IndicadorChart>
                            <IndicadorChartLabel>12</IndicadorChartLabel>
                        </IndicadorChart>
                    </IndicadorItem>
                </IndicadorCard>
                <IndicadorCard>
                    <IndicadorItem>
                        <IndicadorTitle>Compromissos</IndicadorTitle>
                        <PieChart
                            innerRadius="85%"
                            style={{height: 60}}
                            data={pieData}
                        />
                        <IndicadorChart>
                            <IndicadorChartLabel>08</IndicadorChartLabel>
                        </IndicadorChart>
                    </IndicadorItem>
                </IndicadorCard>
            </Indicadores>
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
                            rightAvatar={{source: require('../../assets/images/avatar.png')}}
                        />
                    ))
                }
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
