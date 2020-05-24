import React, {useState, useEffect} from 'react';
import {ScrollView, Button} from 'react-native';
import styled from 'styled-components';
import BurgerIngredientsButtons from '../components/burgerIngredientsButtons';
import {BurgerBottom, BurgerTop, Meat, Cheese, Salad, Bacon} from './ingredients';
import * as variables from '../assets/variables';
import {set} from "react-native-reanimated";


const BurgerIngredientsWrapper = styled.View`

`;

const BurgerWrapper = styled.View`

`;


const Paragraph = styled.Text`
text-align: center;
`;



export default function BurgerIngredients({bacon, addBacon, removeBacon,
                                              cheese, addCheese, removeCheese, salad, addSalad, removeSalad,
                                              meat, addMeat, removeMeat, price}) {

    const meatArr = [];
    const cheeseArr = [];
    const baconArr = [];
    const saladArr = [];





    for (let i = 0; i < meat; i++) {
        meatArr.push(<Meat key={Math.random() * i}/>)
    }

    for (let i = 0; i < cheese; i++) {
        cheeseArr.push(<Cheese key={Math.random() * i}/>)
    }

    for (let i = 0; i < salad; i++) {
        baconArr.push(<Salad key={Math.random() * i}/>)
    }

    for (let i = 0; i < bacon; i++) {
        saladArr.push(<Bacon key={Math.random() * i}/>)
    }




    let ingredients = <Paragraph>Add ingredients...</Paragraph>;
    if (salad > 0 || cheese > 0 || bacon > 0 || meat > 0) {
        ingredients = null;
    }
//todo: fix price
    return (

        <BurgerIngredientsWrapper>
            <ScrollView>

                    <BurgerWrapper>
                        <BurgerTop></BurgerTop>
                        {ingredients}
                        {meatArr}
                        {cheeseArr}
                        {saladArr}
                        {baconArr}
                        <BurgerBottom></BurgerBottom>
                    </BurgerWrapper>

                <Paragraph>{price.toFixed(2)}$</Paragraph>
                <BurgerIngredientsButtons
                    addMeat={addMeat}
                    removeMeat={removeMeat}
                    addCheese={addCheese}
                    removeCheese={removeCheese}
                    addSalad={addSalad}
                    removeSalad={removeSalad}
                    addBacon={addBacon}
                    removeBacon={removeBacon}
                />
            </ScrollView>
        </BurgerIngredientsWrapper>

    )
}
