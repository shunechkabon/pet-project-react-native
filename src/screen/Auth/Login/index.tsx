import React, { useState } from 'react';
import { View } from 'react-native';
import s from '../styles';
import AuthHeader from '../components/AuthHeader/index';
import Input from '../../../common/components/Input/index';
import DefaultButton from '../../../common/components/DefaultButton/index';
import AuthLayout from '../components/AuthLayout/index';

interface IInputValue{
    email: string;
    password: string;
    errorEmail: null | string,
    errorPassword: null | string,
}

export default function LoginPage() {
    const [inputValues, setInputValues] = useState<IInputValue>({
        email: '',
        password: '',
        errorEmail: null,
        errorPassword: null,
    });
    const handleChangeInput = (
        key: 'email' | 'password' | 'errorEmail' | 'errorPassword',
        value: null | string,
    ) => {
        setInputValues(prevState => ({ ...prevState, [key]: value }));
    };

    const checkEmail = () => {
        const emailValidator = new RegExp(
            '^([a-z0-9_.%+-]+@[a-z0-9.-]+\\.[a-z]{2,6})*$'
        );
        if (!emailValidator.test(inputValues.email)) {
            handleChangeInput('errorEmail', 'Not valid email');
        } else {
            handleChangeInput('errorEmail', null);
        }
    };
    const checkPassword = (text: string) => {
        if (text.length < 8) {
            handleChangeInput('errorPassword', 'Password must be more than 8 symbols');
        } else {
            handleChangeInput('errorPassword', null);
        }
    };

    const isDisabledLoginBtn =
        Boolean(inputValues.errorEmail ||
        inputValues.errorPassword ||
        !inputValues.email ||
        !inputValues.password);

    return (
        <AuthLayout>
            <AuthHeader activeTab={'login'} />
            <View style={s.formContainer}>
                <Input
                    onBlur={checkEmail}
                    value={inputValues.email}
                    onChangeText={text => handleChangeInput('email', text)}
                    error={inputValues.errorEmail}
                    placeholder={'Email'}
                />
                <Input
                    placeholder={'Password'}
                    value={inputValues.password}
                    onChangeText={text => {
                        handleChangeInput('password', text);
                        checkPassword(text);
                    }}
                    secureTextEntry={true}
                />
            </View>
            <DefaultButton
                onPress={() => { }}
                disabled={isDisabledLoginBtn}
                text={'Увійти'}
            />
        </AuthLayout>
    );
}
