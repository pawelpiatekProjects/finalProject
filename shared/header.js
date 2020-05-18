import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import {MaterialIcons} from '@expo/vector-icons';
import * as variables from '../assets/variables';

const HeaderWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HeaderContent = styled.View`

`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${variables.white};
`;



export default function Header({navigation}) {

    const openMenu = () =>{
        navigation.openDrawer()
    }

    return(
        <HeaderWrapper>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
        </HeaderWrapper>
    )
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        left: 16,
        color: variables.white
    }
})
