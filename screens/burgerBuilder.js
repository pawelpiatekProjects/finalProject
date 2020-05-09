import React from 'react';
import styled from 'styled-components';
import BurgerIngredients from '../components/burgerIngredients';

const Container = styled.View`

`;

const Title = styled.Text`

`;

const Img = styled.Image`
width: 200px;
height: 200px;
`;




export default function BurgerBuilder() {
    return(
        <Container>
            <BurgerIngredients/>
        </Container>
    )
}
