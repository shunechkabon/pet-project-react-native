import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import s from '../../../screen/Auth/styles';

interface IDefaultButton {
    disabled?: boolean;
    onPress: () => void;
    text: string;
}

export default function DefaultButton({
    disabled = false,
    onPress,
    text,
}: IDefaultButton) {
    return (
        <TouchableOpacity
            style={[s.loginBtnContainer, disabled && { opacity: 0.5 }]}
            disabled={disabled}
            onPress={onPress}>
            <Text style={s.loginText}>{text}</Text>
        </TouchableOpacity>
    );
}
