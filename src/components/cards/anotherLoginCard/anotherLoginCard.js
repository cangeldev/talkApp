import { View, Image } from 'react-native'
import React from 'react'
import style from './style'

export function AnotherLoginCard({ list }) {
    return (
        <View style={style.view}>
            <Image
                source={list.value}
                style={style.image} />
        </View>
    )
}