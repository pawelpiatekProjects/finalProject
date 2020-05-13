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
  font-size: 10px;
  color: ${variables.red};
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;

const onSubmit = (values) => {
    console.log(values)
}
//todo: add disabliing keyboard in form after clicking on screen
//todo: eneble scrolling in form
export default function OrderForm() {
    return (
        <Formik
            initialValues={{
                email: '',
                name: '',
                lastName: '',
                phone: '',
                city: '',
                street: '',
                house: ''
            }}
            onSubmit={values => Alert.alert(JSON.stringify(values))}
            validationSchema={yup.object().shape({
                email: yup
                    .string()
                    .email()
                    .required(),
                name: yup
                    .string()
                    .required(),
                lastName: yup
                    .string()
                    .required(),
                phone: yup
                    .number()
                    .required(),
                city: yup
                    .string()
                    .required(),
                street: yup
                    .string()
                    .required(),
                house: yup
                    .string()
                    .required(),
            })}
        >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                <FormWrapper>
                    <TextInput
                        style={styles.input}
                        value={values.name}
                        onChangeText={handleChange('name')}
                        placeholder="Name"
                        onBlur={() => setFieldTouched('name')}

                    />
                    {touched.name && errors.name &&
                    <Error>{errors.name}</Error>
                    }
                    <TextInput
                        style={styles.input}
                        value={values.lastName}
                        onChangeText={handleChange('lastName')}
                        placeholder="Last name"
                        onBlur={() => setFieldTouched('lastName')}

                    />
                    {touched.lastName && errors.lastName &&
                    <Error>{errors.lastName}</Error>
                    }
                    <TextInput
                        style={styles.input}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        placeholder="E-mail"
                    />
                    {touched.email && errors.email &&
                    <Error>{errors.email}</Error>
                    }
                    <TextInput
                        keyboardType='numeric'
                        style={styles.input}
                        value={values.phone}
                        onChangeText={handleChange('phone')}
                        placeholder="Phone"
                        onBlur={() => setFieldTouched('phone')}

                    />
                    {touched.phone && errors.phone &&
                    <Error>{errors.phone}</Error>
                    }
                    <TextInput
                        style={styles.input}
                        value={values.city}
                        onChangeText={handleChange('city')}
                        placeholder="City"
                        onBlur={() => setFieldTouched('city')}

                    />
                    {touched.city && errors.city &&
                    <Error>{errors.city}</Error>
                    }
                    <TextInput
                        style={styles.input}
                        value={values.street}
                        onChangeText={handleChange('street')}
                        placeholder="Street"
                        onBlur={() => setFieldTouched('street')}

                    />
                    {touched.street && errors.street &&
                    <Error>{errors.street}</Error>
                    }
                    <TextInput
                        style={styles.input}
                        value={values.house}
                        onChangeText={handleChange('house')}
                        placeholder="House"
                        onBlur={() => setFieldTouched('house')}

                    />
                    {touched.house && errors.house &&
                    <Error>{errors.house}</Error>
                    }
                    <Button
                        title='Order'
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
