import React, {useState} from 'react';
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

//todo:  move state here
export default function BurgerBuilder({navigation}) {

    const order = () => {
        navigation.navigate('Order');
    }

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
        if(meat>0){
            setMeat(prevMeat => prevMeat -1);
        }
        if(price>=2){
            setPrice(prevPrice => prevPrice -2)
        }
    }

    const addCheese = () =>{
            setCheese(prevCheese => prevCheese + 1);
            setPrice(prevPrice => prevPrice +1);
    }

    const removeCheese =() =>{
        if(cheese>0){
            setCheese(prevCheese => prevCheese -1);
        }
        if(price>=1){
            setPrice(prevPrice => prevPrice -1);
        }
    }

    const addSalad = () =>{
        setSalad(prevSalad => prevSalad + 1);
        setPrice(prevPrice => prevPrice + 0.5);
    }

    const removeSalad = () =>{
        if(salad>0){
            setSalad(prevSalad => prevSalad-1);
        }
        if(price>=0.5){
            setPrice(prevPrice => prevPrice - 0.5);
        }
    }

    const addBacon = () =>{
        setBacon(prevBacon => prevBacon + 1);
        setPrice(prevPrice => prevPrice + 0.7);
    }


    const removeBacon = () =>{
        if(bacon>0){
            setBacon(prevBacon => prevBacon -1);
        }
        if(price>=0.7){
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
                <CustomButton text="Order" press={order}/>
            </ScrollView>
        </Container>
    )
}
