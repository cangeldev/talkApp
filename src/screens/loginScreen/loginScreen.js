import { View, Text, Image, KeyboardAvoidingView, BackHandler } from 'react-native'
import React, { useState, useEffect } from 'react'
import style from './style'
import { BackGround, Logo } from 'assets'
import { CustomButton, CustomInput, Divider, FlashError, FocusAwareStatusBar } from 'components'
import colors from 'assets/colors/colors'
import { AnotherLoginList } from 'utils/helper'
import { AnotherLoginCard } from 'components/cards'
import auth from '@react-native-firebase/auth';
import authErrorMessageParser from 'utils/authErrorMessageParser'
export function LoginScreen({ navigation }) {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true);
    }, []);
    const [mail, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = () => {
        if (!mail || !password) {
            FlashError("Email veya şifre boş geçilemez!")
            return;
        }
        auth().signInWithEmailAndPassword(mail, password)
            .then(() => {
                navigation.navigate("HomeScreen")
            })
            .catch((err) => {
                FlashError(authErrorMessageParser(err.code))
            })
    }
    const handleRegisterPage = () => {
        navigation.navigate("RegisterScreen");
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={style.container}>
            <FocusAwareStatusBar
                barStyle="dark-content"
                backgroundColor={colors.loginBackGround} />

            <Image
                source={Logo}
                style={style.logo} />
            <Image
                source={BackGround}
                style={style.image} />
            <Text style={style.text}>
                We are happy to see you here!
            </Text>
            <CustomInput
                name="Email"
                place="example@gmail.com"
                iconName={"md-mail"}
                secure={false}
                onChangeText={setEmail}
            />
            <CustomInput
                name="Password"
                place="********"
                iconName={"ios-eye-off"}
                secure={true}
                onChangeText={setPassword}

            />
            <CustomButton
                text="Login"
                onPress={handleLogin}
                genericStyle="primary" />

            <CustomButton
                text="Sign up"
                onPress={handleRegisterPage}
                genericStyle="secondary" />
            <Divider />
            <View style={style.anotherLoginView}>
                {
                    AnotherLoginList.map((item) => <AnotherLoginCard key={item.id} list={item} />)
                }
            </View>
        </KeyboardAvoidingView>
    )
}
