import {Card} from "react-native-elements";
import styled from 'styled-components/native';

export const IndicadoresContainer = styled.ScrollView`
    padding-bottom: 20px;
`;

export const IndicadorCard = styled(Card).attrs(props => ({
    containerStyle: {
        paddingTop: 15,
        paddingRight: 0,
        paddingBottom: 15,
        paddingLeft: 0,
        marginLeft: props.style ? props.style.marginLeft : 0,
    }
}))``;

export const IndicadorItem = styled.View`
    width: 130px;
    height: 100px;
`;

export const IndicadorTitle = styled.Text`
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
    font-size: 15px;
`;

export const IndicadorCalendario = styled.View`
    width: 65px;
`;

export const IndicadorChart = styled.View`
    position: absolute;
    top: 47%;
    left: 39%;
`;

export const IndicadorChartLabel = styled.Text`
    font-size: 26px;
`;

export const CalendarioMes = styled.View`
    background-color: #f44336;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
`;

export const CalendarioMesText = styled.Text`
    color: #fff;
    text-align: center;
    text-transform: capitalize;
`;

export const CalendarioDia = styled.View`
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

export const CalendarioDiaText = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
`;
