import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import {PieChart} from 'react-native-svg-charts';
import styled from 'styled-components/native';

const Indicadores = styled.ScrollView`
    flex-direction: row;
`;

const IndicadorContainer = styled.View`
    padding-left: 20px;
    padding-right: 20px;
`;

const IndicadorItem = styled.View`
    height: 100px;
    width: 80px;
    margin: 0 auto;
`;

const IndicadorChart = styled.View`
    position: absolute;
    top: 18px;
    left: 30%;
`;

const IndicadorChartLabel = styled.Text`
    font-size: 32px;
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
    font-size: 48px;
    text-align: center;
`;

const data = [50, 40, 95];
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

const HomeScreen = () => {
    return (
        <View>
            <Indicadores horizontal={true}>
                <Card title="Calendário">
                    <IndicadorContainer>
                        <IndicadorItem>
                            <CalendarioMes>
                                <CalendarioMesText>março</CalendarioMesText>
                            </CalendarioMes>
                            <CalendarioDia>
                                <CalendarioDiaText>10</CalendarioDiaText>
                            </CalendarioDia>
                        </IndicadorItem>
                    </IndicadorContainer>
                </Card>
                <Card title="Tarefas">
                    <IndicadorContainer>
                        <IndicadorItem>
                            <PieChart
                                innerRadius="85%"
                                style={{height: 80}}
                                data={pieData}
                            />
                            <IndicadorChart>
                                <IndicadorChartLabel>40</IndicadorChartLabel>
                            </IndicadorChart>
                        </IndicadorItem>
                    </IndicadorContainer>
                </Card>
                <Card title="Intimações">
                    <IndicadorContainer>
                        <IndicadorItem>
                            <PieChart
                                innerRadius="85%"
                                style={{height: 80}}
                                data={pieData}
                            />
                            <IndicadorChart>
                                <IndicadorChartLabel>20</IndicadorChartLabel>
                            </IndicadorChart>
                        </IndicadorItem>
                    </IndicadorContainer>
                </Card>
                <Card title="Andamentos">
                    <IndicadorContainer>
                        <IndicadorItem>
                            <PieChart
                                innerRadius="85%"
                                style={{height: 80}}
                                data={pieData}
                            />
                            <IndicadorChart>
                                <IndicadorChartLabel>27</IndicadorChartLabel>
                            </IndicadorChart>
                        </IndicadorItem>
                    </IndicadorContainer>
                </Card>
                <Card title="Audiências">
                    <IndicadorContainer>
                        <IndicadorItem>
                            <PieChart
                                innerRadius="85%"
                                style={{height: 80}}
                                data={pieData}
                            />
                            <IndicadorChart>
                                <IndicadorChartLabel>12</IndicadorChartLabel>
                            </IndicadorChart>
                        </IndicadorItem>
                    </IndicadorContainer>
                </Card>
                <Card title="Compromissos">
                    <IndicadorContainer>
                        <IndicadorItem>
                            <PieChart
                                innerRadius="85%"
                                style={{height: 80}}
                                data={pieData}
                            />
                            <IndicadorChart>
                                <IndicadorChartLabel>08</IndicadorChartLabel>
                            </IndicadorChart>
                        </IndicadorItem>
                    </IndicadorContainer>
                </Card>
            </Indicadores>
        </View>
    );
};

export default HomeScreen;
