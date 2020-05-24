import React from 'react';
import styled from 'styled-components';

const TextButtonWrapper = styled.TouchableOpacity`

`;

const Text = styled.Text`
  color: ${props=>props.color};
  font-size: ${props=>props.fontSize}px;
`;

export default function TextButton({text, color, fontSize, press}) {
    return(
        <TextButtonWrapper onPress={press}>
            <Text color={color} fontSize={fontSize}>{text}</Text>
        </TextButtonWrapper>
    )
}