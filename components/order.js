import React,{useState} from 'react';
import styled from 'styled-components';
import * as variables from '../assets/variables';
import { AntDesign } from '@expo/vector-icons';
import {block} from "react-native-reanimated";

const OrderWrapper = styled.View`
margin-top: 30px;
`;
const Paragraph = styled.Text`

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

export default function Order({data}) {
    const [isDetails, setIsDetails] = useState(false);
    let caretName = 'caretdown';

    if(!isDetails){
        caretName='caretright'
    }

    return (
        <OrderWrapper>
            <IntroContainer>
                <Paragraph>{data.date}</Paragraph>
                <AntDesign name={caretName} size={20} color="black" onPress={()=>setIsDetails(!isDetails)}/>
            </IntroContainer>
            {
                isDetails ? (
                    <DetailsContainer>
                        <Paragraph>test</Paragraph>
                    </DetailsContainer>
                ): null
            }

        </OrderWrapper>
    )
}