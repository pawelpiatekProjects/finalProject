//-------------------------------
// Custom header used in drawer navigation
//-------------------------------

// imports
import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import {MaterialIcons} from '@expo/vector-icons';
import * as variables from '../assets/variables';


// styles
const HeaderWrapper = styled.View`
width: 100%;
flex-direction: row;
position: relative;
justify-content: center;
align-items: center;
`;



export default function Header({navigation}) {

    // method which opens drawer
    const openMenu = () =>{
        navigation.openDrawer()
    }

    // returning and rendering components on the screen
    return(
        <HeaderWrapper>
            <MaterialIcons name='menu' size={35} onPress={openMenu} style={styles.icon}/>
        </HeaderWrapper>
    )
}

// another styles
const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        left: -70,
        color: variables.white,
        padding: 0,
        margin: 0
    }
})
