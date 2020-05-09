import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {AntDesign} from '@expo/vector-icons';


const Wrapper = styled.View`
margin-top: 50px;
`;

const Row = styled.View`
margin-bottom: 20px;
`;

const ButtonsRow = styled.View`
flex-direction: row;
width: 100%;
align-items: center;
justify-content: center;
`;

const Button = styled.View`
margin: 0 15px;
`;

const Header = styled.Text`
text-align: center;
font-size: 20px;
`;

const buttonSize = 30;


export default function BurgerIngredientsButtons({addMeat, removeMeat, addCheese, removeCheese, addSalad, removeSalad,
    addBacon, removeBacon}) {
    return (
        <Wrapper>
            <Row>
                <Header>Meat</Header>
                <ButtonsRow>
                    <Button>
                        <TouchableOpacity onPress={removeMeat}>
                            <AntDesign name="minus" size={buttonSize} color="black"/>
                        </TouchableOpacity>
                    </Button>
                    <Button>
                        <TouchableOpacity onPress={addMeat}>
                            <AntDesign name="plus" size={buttonSize} color="black"/>
                        </TouchableOpacity>
                    </Button>
                </ButtonsRow>
            </Row>
            <Row>
                <Header>Cheese</Header>
                <ButtonsRow>
                    <Button>
                        <TouchableOpacity onPress={removeCheese}>
                            <AntDesign name="minus" size={buttonSize} color="black"/>
                        </TouchableOpacity>
                    </Button>
                    <Button>
                        <TouchableOpacity onPress={addCheese}>
                            <AntDesign name="plus" size={buttonSize} color="black"/>
                        </TouchableOpacity>
                    </Button>
                </ButtonsRow>
            </Row>
            <Row>
                <Header>Bacon</Header>
                <ButtonsRow>
                    <Button>
                        <TouchableOpacity onPress={removeBacon}>
                            <AntDesign name="minus" size={buttonSize} color="black"/>
                        </TouchableOpacity>
                    </Button>
                    <Button>
                        <TouchableOpacity onPress={addBacon}>
                            <AntDesign name="plus" size={buttonSize} color="black"/>
                        </TouchableOpacity>
                    </Button>
                </ButtonsRow>
            </Row>
            <Row>
                <Header>Salad</Header>
                <ButtonsRow>
                    <Button>
                        <TouchableOpacity onPress={removeSalad}>
                            <AntDesign name="minus" size={buttonSize} color="black"/>
                        </TouchableOpacity>
                    </Button>
                    <Button>
                        <TouchableOpacity onPress={addSalad}>
                            <AntDesign name="plus" size={buttonSize} color="black"/>
                        </TouchableOpacity>
                    </Button>
                </ButtonsRow>
            </Row>
        </Wrapper>
    )
}
