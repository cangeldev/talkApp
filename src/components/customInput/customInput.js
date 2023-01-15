import { View, Text, TextInput, } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from 'assets/colors/colors';

export function CustomInput({ name, place, iconName, secure, onChangeText }) {
    const [active, setActive] = useState(secure)
    const activeClick = () => {
        setActive(!active)
    }
    return (
        <View style={style.container}>
            <TextInput
                style={style.inputContainer}
                placeholder={place}
                placeholderTextColor={colors.placeholderTextColor}
                secureTextEntry={active}
                onChangeText={onChangeText}
                autoCapitalize='none'
            />
            <Icon
                name={!secure ? iconName = (iconName) : (active ? iconName = "ios-eye-off" : iconName = "ios-eye")}
                size={20}
                style={style.icon}
                onPress={iconName == "md-mail" ? null : activeClick}
            />
            <Text style={style.text}>
                {name}
            </Text>
        </View>
    )
}