import AuthLayout from '../components/AuthLayout/index';
import AuthHeader from '../components/AuthHeader/index';
import s from '../styles';
import { View, Keyboard } from 'react-native';
import Input from '../../../common/components/Input/index';
import {Formik, FormikHelpers, FormikProps } from 'formik';
import {RegistrationSchema} from '../utils/validations';
import DefaultButton from '../../../common/components/DefaultButton/index';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigation } from '../../../navigation/types';
import { ScreenNames } from '../../../constants/screenNames';

interface ITouched {
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
}
interface IRegistrationForm {
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Registration() {
    const [touched, setTouched] = useState<ITouched>({
        email: false,
        password: false,
        confirmPassword: false,
    });

    const navigation = useNavigation<StackNavigationProp<RootStackNavigation>>();

    const registerUser = async (
        email: string,
        password: string,
        formikHelpers: FormikHelpers<IRegistrationForm>
    ) => {
        try {
            const result = await auth().createUserWithEmailAndPassword(email, password);
            if (result.user) {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{name: ScreenNames.LOGGED_IN_STACK}],
                    }),
                );
            }
        } catch (e: any) {
            console.log('ERROR', e);
            if (e.code === 'auth/email-already-in-use') {
                formikHelpers.setErrors({ email: 'email-already-in-use' });
            }
        }
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((user) => {
            console.log('user', user);
        });
        return subscriber;
    }, []);

    return (
        <AuthLayout>
            <AuthHeader activeTab={'registration'} />
            <Formik<IRegistrationForm>
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={async (values, formikHelpers) => {
                    await registerUser(values.email, values.password, formikHelpers);
                    Keyboard.dismiss();
                    formikHelpers.resetForm();
                }}
                validationSchema={RegistrationSchema()}>
                {({
                    values,
                    setFieldValue,
                    handleSubmit,
                    isValid,
                    errors,
                }: FormikProps<IRegistrationForm>) => (
                    <>
                        <View style={s.formContainer}>
                            <Input
                                onFocus={() =>
                                    setTouched(prevState => ({ ...prevState, email: true }))
                                }
                                value={values.email}
                                onChangeText={value => {
                                    setFieldValue('email', value);
                                }}
                                placeholder={'Email'}
                                error={touched.email ? errors.email : undefined}
                            />
                            <Input
                                onFocus={() =>
                                    setTouched(prevState => ({ ...prevState, password: true }))
                                }
                                value={values.password}
                                onChangeText={value => {
                                    setFieldValue('password', value);
                                }}
                                placeholder={'Password'}
                                error={touched.password ? errors.password : undefined}
                                secureTextEntry={true}
                            />
                            <Input
                                onFocus={() =>
                                    setTouched(prevState => ({
                                        ...prevState,
                                        confirmPassword: true,
                                    }))
                                }
                                value={values.confirmPassword}
                                onChangeText={value => {
                                    setFieldValue('confirmPassword', value);
                                }}
                                placeholder={'Confirm password'}
                                error={touched.confirmPassword ? errors.confirmPassword : undefined}
                                secureTextEntry={true}
                            />
                        </View>
                        <DefaultButton
                            disabled={
                                !isValid ||
                                !values.email ||
                                !values.password ||
                                !values.confirmPassword
                            }
                            onPress={handleSubmit}
                            text={'Зарееструватись'}
                        />
                    </>
                )}
            </Formik>
        </AuthLayout>
    );
}
