import { View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import colors from 'assets/colors/colors';
import { FocusAwareStatusBar, SubmitButton } from 'components';
import { RoomBackGround } from 'assets';
import { MessageCard } from 'components/cards';
import { ContentInputModal } from 'components/modal';
import parseContentData from 'utils/parseContentData';
SystemNavigationBar.setNavigationColor(colors.loginBackGround, 'dark');

export function RoomScreen({ navigation, route }) {
    const [inputModalVisible, setInputModalVisible] = useState(false)
    const [messages, setMessages] = React.useState([])
    const renderRoomMessages = ({ item }) => <MessageCard item={item} />
    useEffect(() => {
        database().ref(`rooms/${item.id}/${item.text}`)
            .on('value', snapshot => {
                const contentData = snapshot.val()
                const parsedData = parseContentData(contentData || {})
                setMessages(parsedData)
            });
    }, [])
    const { item } = route.params;
    const goBack = () => {
        navigation.navigate("HomeScreen")
    }
    function signOut() {
        auth().signOut();
        navigation.navigate("LoginScreen")
    }
    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible)
    }
    function handleContentSend(message) {
        handleInputToggle()
        sendContent(message)
    }
    async function sendContent(message) {
        const userMail = auth().currentUser.email
        try {
            const contentObject = {
                message: message,
                username: userMail.split('@')[0],
                date: new Date().toISOString(),
            }
            database().ref(`rooms/${item.id}/${item.text}`).push(contentObject)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ImageBackground
            source={RoomBackGround}
            style={style.container}
            imageStyle={{
                opacity: 0.1, resizeMode: "repeat"
            }}>
            <FocusAwareStatusBar
                barStyle="light-content"
                backgroundColor={colors.homeBackGround} />
            <View style={style.headerView}>
                <TouchableOpacity
                    style={style.backView}
                    onPress={goBack}
                    activeOpacity={0.5}>
                    <Icon
                        name="md-chevron-back-outline"
                        color={colors.white}
                        size={35} />
                    <Text style={style.backViewText}>
                        Odalar
                    </Text>
                </TouchableOpacity>
                <Text
                    numberOfLines={1}
                    style={style.backViewTitle}>
                    {item.name}
                </Text>
                <IconM
                    name="logout"
                    color={colors.white}
                    style={style.icon}
                    onPress={signOut} />
            </View>
            <Text numberOfLines={1} style={style.createRoomText}>
                {item.name} Odası Oluşturuldu!
            </Text>
            <FlatList
                data={messages}
                renderItem={renderRoomMessages} />
            <SubmitButton handleInputToggle={handleInputToggle} />
            <ContentInputModal
                iconName="create-outline"
                place="Mesaj"
                isModalVisible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleContentSend} />
        </ImageBackground>
    )
}