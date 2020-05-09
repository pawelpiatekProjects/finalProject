import React from 'react';
import styled from 'styled-components';
import * as variables from '../assets/variables';


const Container = styled.View`

`;

const TitleBig = styled.Text`
text-align: center;
font-size: 40px;
color: ${variables.white};
`;

const TitleSmall = styled.Text`
text-align: center;
font-size: 40px;
color: ${variables.primaryYellow};
`;

const Img = styled.ImageBackground`


`;

const Wrapper = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: ${variables.primaryGrey};
opacity: .8;
`;

const Button = styled.Button`

`;



export default function Home({navigation}) {

    const buttonOnPress = () =>{
        navigation.navigate('BurgerBuilder');
    }
    return (
        <Container>
            <Img source={require('../assets/unnamed.png')} style={{width: '100%', height: '100%'}}>
                <Wrapper>
                    <TitleBig>Create your </TitleBig>
                    <TitleSmall>Burger</TitleSmall>
                    <Button title='Create' onPress={buttonOnPress}/>
                </Wrapper>
            </Img>

        </Container>
    )
}
