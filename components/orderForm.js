import React from 'react';
import styled from 'styled-components';
import {Formik} from "formik";
import {TextInput, StyleSheet} from 'react-native';
import * as variables from '../assets/variables';
import CustomButton from '../components/button';

const FormWrapper = styled.View`

`;

const FormInput = styled.TextInput`
padding: 5rem;
border-bottom-color: ${variables.primaryYellow};
`;

const Button = styled.Button`

`;
//todo: add disabliing keyboard in form after clicking on screen
export default function OrderForm() {
    return(
        <Formik initialValues={{
            name: '',
            lastName: '',
            email: '',
            phone: '',
            city: '',
            street: '',
            house: ''
        }} onSubmit={values=>console.log(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <FormWrapper>
                    <TextInput
                        placeholder="Name"
                        style={styles.input}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
                    <TextInput
                        placeholder="Last name"
                        style={styles.input}
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        value={values.lastName}
                    />
                    <TextInput
                        placeholder="E-mail"
                        style={styles.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Phone"
                        style={styles.input}
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                    />
                    <TextInput
                        placeholder="City"
                        style={styles.input}
                        onChangeText={handleChange('city')}
                        onBlur={handleBlur('city')}
                        value={values.city}
                    />
                    <TextInput
                        placeholder="Street"
                        style={styles.input}
                        onChangeText={handleChange('street')}
                        onBlur={handleBlur('street')}
                        value={values.street}
                    />
                    <TextInput
                        placeholder="House"
                        style={styles.input}
                        onChangeText={handleChange('house')}
                        onBlur={handleBlur('house')}
                        value={values.house}
                    />
                    <CustomButton press={handleSubmit} text="Submit" />
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
