import { View, Text, BackHandler, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import { FocusAwareStatusBar, SubmitButton } from 'components';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import colors from 'assets/colors/colors';
import { RoomsCard } from 'components/cards';
import { ContentInputModal } from 'components/modal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from 'utils/parseContentData';
SystemNavigationBar.setNavigationColor(colors.white, 'light');

export function HomeScreen({ navigation }) {
    const [inputModalVisible, setInputModalVisible] = useState(false)
    const [contentList, setContentList] = useState([])
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
    },
        []);
    useEffect(() => {
        database().ref('rooms/')
            .on('value', snapshot => {
                const contentData = snapshot.val()
                const parsedData = parseContentData(contentData)
                setContentList(parsedData)
            });
    }, [])
    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible)
    }

    function handleContentSend(roomName) {
        handleInputToggle()
        sendContent(roomName)
    }
    function sendContent(roomName) {
        const userMail = auth().currentUser.email
        const contentObject = {
            name: roomName,
            username: userMail.split('@')[0],

        }
        database().ref('rooms/').push(contentObject)
    }
    function onSelect(item) {
        navigation.navigate("RoomScreen", item)
    }
    const renderList = ({ item }) => <RoomsCard onSelect={() => onSelect({ item })} rooms={item} />
    return (
        <View style={style.container}>
            <FocusAwareStatusBar
                barStyle="light-content"
                backgroundColor={colors.homeBackGround} />
            <Text style={style.headerText}>
                Gruplar
            </Text>
            <View style={style.divider} />
            <FlatList
                data={contentList}
                renderItem={renderList}
                showsVerticalScrollIndicator={false}
                numColumns="2"
                style={{ alignSelf: "center" }} />
            <SubmitButton handleInputToggle={handleInputToggle} />
            <ContentInputModal
                iconName="create-outline"
                place="Oda adınızı giriniz..."
                isModalVisible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleContentSend} />
        </View>
    )
}