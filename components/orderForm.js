//-------------------------------
// Contact data form
//-------------------------------

// imports
import React, {Component, Fragment} from 'react';
import {
    TextInput,
    Button,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import styled from 'styled-components';
import {Formik} from "formik";
import * as variables from '../assets/variables';
import * as yup from 'yup';
import TextButton from '../components/textButton';

// styles
const FormWrapper = styled.View`
  background-color: ${variables.white};
  height: 100%;
padding: 30px;
`;



const Error = styled.Text`
  font-size: 10px;
  color: ${variables.red};
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;


export default function OrderForm({setData}) {

    // returning and rendering Formik form
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
            onSubmit={values => {
                setData(values);
            }}
            // yup validation
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
            {({values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit}) => (

                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.scrollKeyboard}>
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <FormWrapper>
                            <ScrollView>
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

                                <TextButton
                                    text='Order'
                                    disabled={!isValid}
                                    press={handleSubmit}
                                    fontSize={25}
                                    color={variables.primaryYellow}
                                />
                            </ScrollView>
                        </FormWrapper>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>

            )}
        </Formik>

    )
}

// another styles
const styles = StyleSheet.create({
    input: {
        borderBottomColor: variables.secondaryGrey,
        color: variables.primaryYellow,
        borderBottomWidth: 3,
        marginHorizontal: 30,
        marginVertical: 30,
        paddingBottom: 5,

    },
    button: {
        color: variables.primaryYellow
    },
    scrollKeyboard: {

    }
})
