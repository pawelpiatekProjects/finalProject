//-------------------------------
// Custom button component
//-------------------------------

// imports
import React from 'react';
import styled from 'styled-components';
import * as variables from '../assets/variables';

// styles
const ButtonWrapper = styled.TouchableOpacity`
background-color: ${variables.white};
border: 4px solid ${variables.primaryYellow};
width: 50%;
margin: 20px auto;
padding: 20px;
border-radius: 30px;
`;

const Text = styled.Text`
text-align: center;
color: ${variables.primaryGrey};
font-size: 20px;
`;

export default function Button({text, press}) {

    // returning and rendering components on the screen
    return(
        <ButtonWrapper onPress={press}>
            <Text>{text}</Text>
        </ButtonWrapper>
    )

}
