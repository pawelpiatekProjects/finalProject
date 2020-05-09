import React, {useState} from 'react';
import styled from 'styled-components';
import BurgerIngredientsButtons from '../components/burgerIngredientsButtons';

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
    const [meat, setMeat] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [salad, setSalad] = useState(0);

    const meatArr=[];
    const cheeseArr=[];
    const baconArr=[];
    const saladArr=[];

    for(let i=0;i<meat;i++){
        meatArr.push(<Meat/>)
    }

    for(let i=0;i<cheese;i++){
        cheeseArr.push(<Cheese/>)
    }

    for(let i=0;i<salad;i++){
        baconArr.push(<Salad/>)
    }

    for(let i=0;i<bacon;i++){
        saladArr.push(<Bacon/>)
    }

    const addMeat = () =>{
        const oldMeat= meat
        setMeat(oldMeat+1);
    }

    const removeMeat = () =>{
        const oldMeat= meat
        setMeat(oldMeat-1);
    }

    const addCheese = () =>{
        const oldCheese = cheese;
        setCheese(oldCheese+1);
    }

    const removeCheese = () =>{
        const oldCheese = cheese;
        setCheese(oldCheese-1);
    }

    const addSalad = () =>{
        const oldSalad = salad;
        setSalad(oldSalad+1);
    }

    const removeSalad = () =>{
        const oldSalad = salad;
        setSalad(oldSalad-1);
    }

    const addBacon = () =>{
        const oldBacon = bacon;
        setBacon(oldBacon+1);
    }

    const removeBacon = () =>{
        const oldBacon = bacon;
        setBacon(oldBacon-1);
    }

    return (
        <BurgerIngredientsWrapper>
            <BurgerTop></BurgerTop>
            {meatArr}
            {cheeseArr}
            {saladArr}
            {baconArr}
            <BurgerBottom></BurgerBottom>
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
        </BurgerIngredientsWrapper>
    )
}
