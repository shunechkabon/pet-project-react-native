import AuthLayout from '../components/AuthLayout/index';
import AuthHeader from '../components/AuthHeader/index';
import s from '../styles';
import {View} from 'react-native';
import Input from '../../../common/components/Input/index';
import {Formik, FormikValues} from 'formik';
import {RegistrationSchema} from '../utils/validations';
import DefaultButton from '../../../common/components/DefaultButton/index';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

interface ITouched {
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
}

export default function Registration() {
    const [touched, setTouched] = useState<ITouched>({
        email: false,
        password: false,
        confirmPassword: false,
    });

    const registrateUser = async (email: string, password: string) => {
        try {
            const result = await auth().createUserWithEmailAndPassword(email, password);
            console.log('result', result);
        } catch (e) {
            console.log('ERROR', e);
        }
    };

    useEffect(() => {
        fetch('https://www.google.com')
    .then(() => console.log('✅ Интернет работает в эмуляторе'))
            .catch((e) => console.log('❌ Интернет НЕ работает в эмуляторе', e));

        const subscriber = auth().onAuthStateChanged((user) => {
            console.log('user', user);
        });
        return subscriber;
    }, []);

    return (
        <AuthLayout>
            <AuthHeader activeTab={'registration'} />
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={value => {
                    registrateUser(value.email, value.password);
                }}
                validationSchema={RegistrationSchema()}>
                {({
                    values,
                    setFieldValue,
                    handleSubmit,
                    isValid,
                    errors,
                }: FormikValues) => (
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
                                error={touched.email && errors.email}
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
                                error={touched.password && errors.password}
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
                                error={touched.confirmPassword && errors.confirmPassword}
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
