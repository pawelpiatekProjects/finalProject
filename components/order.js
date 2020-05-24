import React,{useState} from 'react';
import {TouchableWithoutFeedback} from "react-native";
import styled from 'styled-components';
import * as variables from '../assets/variables';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const OrderWrapper = styled.View`
margin-top: 30px;
`;

const Paragraph = styled.Text`
  color: ${props=>props.color};
`;

const BoldParagraph = styled.Text`
color: ${props=>props.color};
font-weight: bold;

font-size: 20px;
`;


const IntroContainer = styled.View`
padding: 20px;
width: 80%;
margin: 0 auto;
border-width: 3px;
border-color: ${variables.primaryYellow};
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const DetailsContainer = styled.View`
width: 80%;
margin: 0 auto;
background: ${variables.primaryYellow};
padding: 20px;

`;

const TitleContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;
`

export default function Order({data, press}) {
    const [isDetails, setIsDetails] = useState(false);
    let caretName = 'caretdown';

    if(!isDetails){
        caretName='caretright'
    }

    return (
        <OrderWrapper>

            <TouchableWithoutFeedback onPress={()=>setIsDetails(!isDetails)}>
                <IntroContainer >
                    <Paragraph color={variables.primaryGrey}>{data.date}</Paragraph>
                    <AntDesign name={caretName} size={20} color="black" />
                </IntroContainer>
            </TouchableWithoutFeedback>

            {
                isDetails ? (
                    <DetailsContainer>
                        <TitleContainer>
                            <BoldParagraph color={variables.white}>Burger </BoldParagraph>
                            <MaterialIcons name="delete" size={30} color={variables.red} onPress={()=>press(data.key)}/>
                        </TitleContainer>
                        <Paragraph color={variables.white}>Meat: {data.burger.meat}</Paragraph>
                        <Paragraph color={variables.white}>Cheese: {data.burger.cheese}</Paragraph>
                        <Paragraph color={variables.white}>Salad: {data.burger.salad}</Paragraph>
                        <Paragraph color={variables.white}>Bacon: {data.burger.bacon}</Paragraph>
                    </DetailsContainer>
                ): null
            }

        </OrderWrapper>
    )
}