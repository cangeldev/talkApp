import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { MessageBoxIcon } from 'assets'
import { parseISO } from 'date-fns';
import { formatDistance } from 'date-fns'

export function MessageCard({ item }) {
    return (
        <View style={style.container}>
            <Image
                source={MessageBoxIcon}
                style={style.messageBoxIcon}
            />
            <Text style={style.name}>
                {item.username}
            </Text>
            <Text style={style.message}>
                {item.message}
            </Text>
            <Text style={style.date}>
                {formatDistance(parseISO(item.date), new Date(),
                    {
                        addSuffix: true,
                    })}
            </Text>
        </View>
    )
}