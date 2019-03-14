import {Button} from "react-native-elements";
import styled from 'styled-components/native';

export const FiltrosRapidos = styled.ScrollView`
    padding-bottom: 20px;
`;

export const FiltroRapidoButton = styled(Button).attrs(props => ({
    buttonStyle: {
        borderRadius: 20,
    },
    containerStyle: {
        overflow: 'hidden',
        marginLeft: props.style?.marginLeft,
        marginRight: 10,
    }
}))``;
