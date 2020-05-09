import React, {useState, useEffect} from 'react';
import {ScrollView, Button} from 'react-native';
import styled from 'styled-components';
import BurgerIngredientsButtons from '../components/burgerIngredientsButtons';
import * as variables from '../assets/variables';
import CustomButton from '../components/button';

const BurgerIngredientsWrapper = styled.View`

`;

const BurgerWrapper = styled.View`

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

const Paragraph = styled.Text`
text-align: center;
`;



export default function BurgerIngredients({navigation}) {
    const [meat, setMeat] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [salad, setSalad] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        setPrice(0);
        setCheese(0);
        setMeat(0);
        setBacon(0);
        setSalad(0);
    }, [])

    const meatArr = [];
    const cheeseArr = [];
    const baconArr = [];
    const saladArr = [];

    for (let i = 0; i < meat; i++) {
        meatArr.push(<Meat/>)
    }

    for (let i = 0; i < cheese; i++) {
        cheeseArr.push(<Cheese/>)
    }

    for (let i = 0; i < salad; i++) {
        baconArr.push(<Salad/>)
    }

    for (let i = 0; i < bacon; i++) {
        saladArr.push(<Bacon/>)
    }

    const addMeat = () => {
        const oldMeat = meat
        setMeat(oldMeat + 1);
        setPrice(price + 2);
    }

    const removeMeat = () => {
        const oldMeat = meat
        if (meat > 0) {
            setMeat(oldMeat - 1);
        }
        if (price >= 2) {
            setPrice(price - 2)
        }

    }

    const addCheese = () => {
        const oldCheese = cheese;
        setCheese(oldCheese + 1);
        setPrice(price + 1);
    }

    const removeCheese = () => {
        const oldCheese = cheese;
        if (cheese > 0) {
            setCheese(oldCheese - 1);
        }
        if (price >= 1) {
            setPrice(price - 1)
        }

    }

    const addSalad = () => {
        const oldSalad = salad;
        setSalad(oldSalad + 1);
        setPrice(price + 0.5)
    }

    const removeSalad = () => {
        const oldSalad = salad;
        if (salad > 0) {
            setSalad(oldSalad - 1);
        }
        if (price >= 0.5) {
            setPrice(price - 0.5);
        }

    }

    const addBacon = () => {
        const oldBacon = bacon;
        setBacon(oldBacon + 1);
        setPrice(price + 0.7);
    }

    const removeBacon = () => {
        const oldBacon = bacon;
        if (bacon > 0) {
            setBacon(oldBacon - 1);
        }
        if (price >= 0.7) {
            setPrice(price - 0.7);
        }

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
