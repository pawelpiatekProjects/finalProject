import React from 'react';
import styled from 'styled-components';
import {Formik} from "formik";

const FormWrapper = styled.View`

`;

const FormInput = styled.TextInput`

`;

const Button = styled.Button`

`;

export default function OrderForm() {
    return(
        <Formik initialValues={{email: ''}} onSubmit={values=>console.log(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <FormWrapper>
                    <FormInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </FormWrapper>
            )}
        </Formik>
    )
}
