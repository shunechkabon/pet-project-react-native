import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';
import s from '../../../screen/Auth/styles';
import {HidePassIcon, ViewPassIcon} from '../../../assets/icons/index';

interface IInput {
    onBlur?: () => void;
    value: string;
    onChangeText: (text: string) => void;
    placeholderColor?: string;
    placeholder?: string;
    error?: string | null;
    secureTextEntry?: boolean;
    additionalContainerStyle?: ViewStyle;
    additionInputStyle?: ViewStyle;
    onFocus?: () => void;
}

export default function Input({
    onBlur,
    placeholder,
    value,
    onChangeText,
    placeholderColor = '#838383',
    error,
    secureTextEntry = false,
    additionalContainerStyle,
    additionInputStyle,
    onFocus,
}: IInput) {
    const [isPassHidden, setIsPassHidden] = useState(secureTextEntry);

    return (
        <>
            <View style={[s.inputContainer, additionalContainerStyle]}>
                <TextInput
                    placeholder={placeholder}
                    style={[s.input, additionInputStyle]}
                    placeholderTextColor={placeholderColor}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    value={value}
                    onChangeText={text => onChangeText(text)}
                    secureTextEntry={isPassHidden}
                />
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => {
                            setIsPassHidden(!isPassHidden);
                        }}
                        hitSlop={{ top: 15, bottom: 15, right: 15, left: 15 }}>
                        {isPassHidden ? (
                            <ViewPassIcon fill={'#000000'} />
                        ) : (
                            <HidePassIcon fill={'#a36161'} />
                        )}
                    </TouchableOpacity>
                )}
            </View>
            {!!error && <Text>{error}</Text>}
        </>
    );
}
