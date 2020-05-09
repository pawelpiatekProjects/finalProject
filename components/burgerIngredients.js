import React from 'react';
import styled from 'styled-components';

const BurgerIngredientsWrapper = styled.View`

`;

const BurgerBottom = styled.View`
width: 80%;
background-color: #F08E4A;
height: 50px;
border-radius: 30px ;
margin: 20px auto;
`;

const BurgerTop = styled.View`
width: 80%;
background-color: #F08E4A;
height: 70px;
border-radius: 30px ;
margin: 20px auto;
`;

const Meat = styled.View`
    width: 80%;
    height: 30px;
    background: #7f3608;
    margin: 2px auto;
    border-radius: 15px;
`;

const Cheese = styled.View`
 width: 90%;
    height: 10px;
    margin: 2px auto;
    background: #f4d004;
    border-radius: 20px;
`;

const Salad = styled.View`
  width: 85%;
    height: 7px;
    margin: 2px auto;
    background: #228c1d;
    border-radius: 20px;
`;

const Bacon = styled.View`
    width: 80%;
    height: 5px;
    background: #bf3813;
    margin: 2px auto;
`;

export default function BurgerIngredients() {
    return(
        <BurgerIngredientsWrapper>
            <BurgerTop></BurgerTop>
            <Salad></Salad>
            <Bacon></Bacon>
            <Cheese></Cheese>
            <Meat></Meat>
            <BurgerBottom></BurgerBottom>
        </BurgerIngredientsWrapper>
    )
}
