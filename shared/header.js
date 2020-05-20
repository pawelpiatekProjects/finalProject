import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import {MaterialIcons} from '@expo/vector-icons';
import * as variables from '../assets/variables';

const HeaderWrapper = styled.View`
width: 100%;
flex-direction: row;
position: relative;
justify-content: center;
align-items: center;

`;







export default function Header({navigation}) {

    const openMenu = () =>{
        navigation.openDrawer()
    }

    return(
        <HeaderWrapper>
            <MaterialIcons name='menu' size={35} onPress={openMenu} style={styles.icon}/>
        </HeaderWrapper>
    )
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        left: -70,
        color: variables.white,
        padding: 0,
        margin: 0
    }
})
