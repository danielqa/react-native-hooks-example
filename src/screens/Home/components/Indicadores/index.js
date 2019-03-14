import React, {Component} from 'react';
import {View} from "react-native";
import {PieChart} from "react-native-svg-charts";

import {
    CalendarioDia,
    CalendarioDiaText,
    CalendarioMes,
    CalendarioMesText,
    IndicadorCalendario,
    IndicadorCard,
    IndicadorChart,
    IndicadorChartLabel,
    IndicadoresContainer,
    IndicadorItem,
    IndicadorTitle
} from "./styles";

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

export default class Indicadores extends Component {
    render() {
        return (
            <IndicadoresContainer horizontal={true}>
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
            </IndicadoresContainer>
        );
    }
}
