//-------------------------------
// Home screen
//-------------------------------

// imports
import React from 'react';
import styled from 'styled-components';
import * as variables from '../assets/variables';
import TextButton from '../components/textButton';

// styles
const Container = styled.View`
background-color: ${variables.white};
height: 100%;
width: 100%;
position: relative;
`;

const Title = styled.Text`
padding: 30px 50px;
text-align: center;
font-size: 20px;
color: ${variables.primaryGrey};
`;



const ImageWrapper = styled.View`
width: 100%;
padding: 50px;
margin: 50px auto;
height: 300px;

`;

const Img = styled.Image`
text-align: center;
margin: 0 auto;

`;

const Wrapper = styled.View`
flex: 1;
align-items: center;
justify-content: center;

opacity: .8;
`;



export default function Home({navigation}) {

    // method which redirects us to 'BurgerBuilder' screen
    const buttonOnPress = () => {
        navigation.navigate('BurgerBuilder');
    }

    // returning and rendering components on the screen
    return (
        <Container>
            <ImageWrapper>
                <Img source={require('../assets/logo.png')} style={{width: 250, height: 330}}/>
            </ImageWrapper>

            <Wrapper>
                <Title>Create and order your dream burger with our app </Title>
                <TextButton text="Create" color={variables.primaryYellow} fontSize={25} press={buttonOnPress}/>
            </Wrapper>


        </Container>
    )
}
