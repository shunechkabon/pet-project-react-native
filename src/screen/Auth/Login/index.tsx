import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import s from './styles';
import { ViewPassIcon, HidePassIcon } from '../../../assets/icons/index';

interface IInputValue{
    email: string;
    password: string;
    errorEmail: null | string,
    errorPassword: null | string,
}

export default function LoginPage() {
    const [isPassHidden, setIsPassHidden] = useState(true);
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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={s.mainWrapper}>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={Platform.select({ android: 20, ios: 90 })}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={s.titleContainer}>
                        <Text style={s.title}>Раді вітати тебе!</Text>
                        <Text style={s.welcomeText}>Кожен пухнастик заслуговує на дбайливих господарів. Ми допоможемо тобі знайти друга.</Text>
                    </View>
                    <View style={s.buttonContainer}>
                        <TouchableOpacity style={s.loginBtn}>
                            <Text>Вхід</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={s.registerBtn}>
                            <Text>Реєстрація</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={s.inputContainer}>
                            <TextInput
                                placeholder={'Email'}
                                style={s.input}
                                onBlur={() => {
                                    checkEmail();
                                }}
                                placeholderTextColor={'#838383'}
                                value={inputValues.email}
                                onChangeText={text => handleChangeInput('email', text)}
                            />
                        </View>
                            {inputValues.errorEmail && <Text>{inputValues.errorEmail}</Text>}
                        <View style={s.inputContainer}>
                            <TextInput
                                placeholder={'Password'}
                                style={s.input}
                                placeholderTextColor={'#838383'}
                                value={inputValues.password}
                                onChangeText={text => {
                                    handleChangeInput('password', text);
                                    checkPassword(text);
                                }}
                                secureTextEntry={isPassHidden}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    setIsPassHidden(!isPassHidden);
                                }}
                                hitSlop={{top: 15, bottom: 15, right: 15, left: 15}}
                            >
                                {isPassHidden ? (
                                    <ViewPassIcon fill={'#000000'} />
                                ) : (
                                    <HidePassIcon fill={'#A36161FF'} />
                                )}
                            </TouchableOpacity>
                        </View>
                            {inputValues.errorPassword && <Text>{inputValues.errorPassword}</Text>}
                    </View>
                    <TouchableOpacity
                        style={[
                            s.loginBtnContainer,
                            isDisabledLoginBtn && {opacity: 0.5},
                        ]}
                        disabled={isDisabledLoginBtn}>
                        <Text style={s.loginText}>Увійти</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}
