import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import BurgerIngredients from '../components/burgerIngredients';
import * as variables from '../assets/variables';
import TextButton from "../components/textButton";

const Container = styled.View`
height: 100%;
margin: -30px 0;
`;



export default function BurgerBuilder({navigation}) {

    const order = () => {
        if(price>0){
            navigation.navigate('Order', {
                burger: {
                    meat: meat,
                    cheese: cheese,
                    salad: salad,
                    bacon: bacon,
                },
                price: price
            });
        }

    }

    useEffect(()=>{
        setPrice(0);
        setBacon(0);
        setMeat(0);
        setCheese(0);
        setSalad(0);
    },[])

    const [meat, setMeat] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [salad, setSalad] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [price,setPrice] = useState(0);

    const addMeat = () =>{
            setMeat(prevMeat => prevMeat +1);
            setPrice(prevPrice => prevPrice + 2)
    }

    const removeMeat = () =>{
        if(meat>0 && price>=2){
            setMeat(prevMeat => prevMeat -1);
            setPrice(prevPrice => prevPrice -2);
        }
    }

    const addCheese = () =>{
            setCheese(prevCheese => prevCheese + 1);
            setPrice(prevPrice => prevPrice +1);
    }

    const removeCheese =() =>{
        if(cheese>0 && price>=1){
            setCheese(prevCheese => prevCheese -1);
            setPrice(prevPrice => prevPrice -1);
        }

    }

    const addSalad = () =>{
        setSalad(prevSalad => prevSalad + 1);
        setPrice(prevPrice => prevPrice + 0.5);
    }

    const removeSalad = () =>{
        if(salad>0 && price>=0.5){
            setSalad(prevSalad => prevSalad-1);
            setPrice(prevPrice => prevPrice - 0.5);
        }
    }

    const addBacon = () =>{
        setBacon(prevBacon => prevBacon + 1);
        setPrice(prevPrice => prevPrice + 0.7);
    }


    const removeBacon = () =>{
        if(bacon>0 && price>=0.7){
            setBacon(prevBacon => prevBacon -1);
            setPrice(prevPrice => prevPrice -0.7)
        }

    }


    return (
        <Container>
            <ScrollView>
                <BurgerIngredients
                    meat={meat}
                    addMeat={addMeat}
                    removeMeat={removeMeat}
                    cheese={cheese}
                    addCheese={addCheese}
                    removeCheese={removeCheese}
                    salad={salad}
                    addSalad={addSalad}
                    removeSalad={removeSalad}
                    bacon={bacon}
                    addBacon={addBacon}
                    removeBacon={removeBacon}
                    price={price}
                />
                {/*todo: set disabled*/}
                <TextButton text="Order" press={order} color={variables.primaryGrey} fontSize={25}/>
            </ScrollView>
        </Container>
    )
}
