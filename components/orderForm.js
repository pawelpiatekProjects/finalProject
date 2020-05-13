import React, { Component, Fragment } from 'react';
import { TextInput, Text, Button, Alert, StyleSheet } from 'react-native';
import styled from 'styled-components';
import {Formik} from "formik";

import * as variables from '../assets/variables';
import CustomButton from '../components/button';
import * as yup from 'yup'

const FormWrapper = styled.View`
  background-color: ${variables.white};
  
padding: 30px;
`;





const Error = styled.Text`

`;

const onSubmit = (values) => {
    console.log(values)
}
//todo: add disabliing keyboard in form after clicking on screen
//todo: eneble scrolling in form
export default function OrderForm() {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => Alert.alert(JSON.stringify(values))}
            validationSchema={yup.object().shape({
                email: yup
                    .string()
                    .email()
                    .required(),
                password: yup
                    .string()
                    .min(6)
                    .required(),
            })}
        >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                <FormWrapper>
                    <TextInput
                        style={styles.input}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        placeholder="E-mail"
                    />
                    {touched.email && errors.email &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                    }
                    <TextInput
                        style={styles.input}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        placeholder="Password"
                        onBlur={() => setFieldTouched('password')}
                        secureTextEntry={true}
                    />
                    {touched.password && errors.password &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                    }
                    <Button
                        title='Sign In'
                        disabled={!isValid}
                        onPress={handleSubmit}
                    />
                </FormWrapper>
            )}
        </Formik>

    )
}


const styles = StyleSheet.create({
    input: {
        borderBottomColor: variables.primaryYellow,
        borderBottomWidth: 3,
        marginHorizontal: 30,
        marginVertical: 30
    }
})
