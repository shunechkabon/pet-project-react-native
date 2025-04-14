import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import s from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../../constants/screenNames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigation } from '../../../../navigation/types';

interface IAuthHeader {
    activeTab: 'login' | 'registration';
}
export default function AuthHeader({ activeTab }: IAuthHeader) {
    const navigation = useNavigation<StackNavigationProp<RootStackNavigation>>();

    const navigateToLogin = () => {
        navigation.navigate(ScreenNames.LOGIN_PAGE);
    };
    const navigateToRegistration = () => {
        navigation.navigate(ScreenNames.REGISTRATION_PAGE);
    };

    return (
        <>
            <View style={[s.titleContainer]}>
                <Text style={s.title}>Раді тебе вітати!</Text>
                <Text style={s.welcomeText}>
                    Кожен пухнастик заслуговує на дбайливих господарів.{'\n'}Ми допоможемо
                    тобі знайти друга.
                </Text>
            </View>
            <View style={s.buttonContainer}>
                <TouchableOpacity
                    onPress={navigateToLogin}
                    style={activeTab === 'login' ? s.activeTab : s.disabledTab}>
                    <Text style={s.authText}>Вхід</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={navigateToRegistration}
                    style={
                        activeTab === 'registration' ? s.activeTab : s.disabledTab
                    }>
                    <Text style={s.authText}>Реєстрація</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
