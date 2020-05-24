//-------------------------------
// Spinner component - loading animation
//-------------------------------

// imports
import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import * as variables from '../assets/variables';

// styles
const SpinnerWrapper = styled.View`

`;

export default function Spinner() {
    return(
        <SpinnerWrapper>
            <ActivityIndicator size='large' color={variables.primaryYellow}/>
        </SpinnerWrapper>
    )
}