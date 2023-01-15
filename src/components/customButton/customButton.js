import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'

export function CustomButton({ text, onPress, genericStyle }) {
    return (
        <TouchableOpacity
            style={style[genericStyle].container}
            onPress={onPress}>
            <Text style={style[genericStyle].buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}