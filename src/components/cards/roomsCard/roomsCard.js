import { Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import { CardBackGround } from 'assets'

export function RoomsCard({ rooms, onSelect }) {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onSelect}>
            <ImageBackground
                imageStyle={style.imageBackground}
                source={CardBackGround}
                style={style.roomContainer} >
                <Text style={style.text}>
                    {rooms.name}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}