import React from 'react';
import { Alert, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Botao from '../Botao';
import { Container, Texto } from './styles';

const AreaPrimaria: React.FC = () => {
    return (
        <Swipeable
            overshootRight={false} // para NAO (false) permitir arrastar para direita
            renderRightActions={() => (
                <Animated.View>
                    <Botao/>
                </Animated.View>
            )}
            onSwipeableClose={()=>{
                Alert.alert('fechou');
            }}

            onSwipeableOpen={()=>{
                Alert.alert('abriu');
            }}
        >
            <Container>
                <Texto>Minha Area</Texto>
            </Container>
        </Swipeable>
    );
}

export default AreaPrimaria;