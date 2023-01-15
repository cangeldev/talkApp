import { TouchableOpacity } from 'react-native'
import React from 'react'
import colors from 'assets/colors/colors'
import style from './style'
import Icon from 'react-native-vector-icons/FontAwesome';

export function SubmitButton({ handleInputToggle }) {
    return (
        <TouchableOpacity
            style={style.submitView}
            onPress={handleInputToggle}>
            <Icon
                name="plus"
                color={colors.white}
                size={25} />
        </TouchableOpacity>
    )
}