import { View, Text } from 'react-native'
import React from 'react'
import style from './style'

export function Divider() {
    return (
        <View style={style.container}>
            <View style={style.containerWrap} />
            <View >
                <Text style={style.text}>
                    Or Login with
                </Text>
            </View >
            <View style={style.containerWrap} />
        </View>
    )
}