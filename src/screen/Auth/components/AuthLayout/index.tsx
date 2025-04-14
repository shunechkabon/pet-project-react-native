import React, { ReactNode } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import s from '../../styles';

type AuthLayoutProps = {
    children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={[s.mainWrapper]}>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={Platform.select({ android: 20, ios: 90 })}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    {children}
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}
