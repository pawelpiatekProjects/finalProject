import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import BurgerIngredients from '../components/burgerIngredients';
import CustomButton from '../components/button';

const Container = styled.View`
height: 100%;
`;

const Title = styled.Text`

`;

const Img = styled.Image`
width: 200px;
height: 200px;
`;


export default function BurgerBuilder({navigation}) {

    const order = () => {
        navigation.navigate('Order');
    }
    return (
        <Container>
            <ScrollView>
                <BurgerIngredients/>
                <CustomButton text="Order" press={order}/>
            </ScrollView>
        </Container>
    )
}
