import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import s from './styles';

export default function LoginPage() {
    return (
        <View style={s.mainWrapper}>
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
                        placeholderTextColor={'#838383'} />
                </View>
                <View style={s.inputContainer}>
                    <TextInput
                        placeholder={'Password'}
                        style={s.input}
                        placeholderTextColor={'#838383'}
                    />
                </View>
            </View>

            <TouchableOpacity style={s.enterBtn}>
                <Text>Увійти</Text>
            </TouchableOpacity>
        </View>
    );
}