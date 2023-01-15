import { View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import Modal from "react-native-modal";
import IconI from 'react-native-vector-icons/Ionicons';
import colors from 'assets/colors/colors';

export function ContentInputModal({ place, iconName, isModalVisible, onClose, onSend }) {
    const [roomName, setRoomName] = useState(null);
    function handleSend() {
        if (!roomName) {
            return;
        }
        onSend(roomName)
        setRoomName(null)
    }
    return (
        <Modal
            onBackButtonPress={onClose}
            onSwipeComplete={onClose}
            isVisible={isModalVisible}
            onBackdropPress={onClose}
            style={{ flex: 1 }}>
            <View style={style.modalView}>
                <TextInput
                    style={style.txtInput}
                    placeholder={place}
                    onChangeText={setRoomName} />
                <TouchableOpacity
                    style={style.modalButton}
                    onPress={handleSend}>
                    <IconI
                        name={iconName}
                        color={colors.loginBackGround}
                        size={22} />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
