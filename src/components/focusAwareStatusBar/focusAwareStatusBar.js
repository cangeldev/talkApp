import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'

export function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
}