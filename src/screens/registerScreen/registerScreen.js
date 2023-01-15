import { View, Text, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import { CustomButton, CustomInput, Divider, FlashError, FocusAwareStatusBar } from 'components'
import { BackGround, Logo } from 'assets'
import { AnotherLoginList } from 'utils/helper'
import { AnotherLoginCard } from 'components/cards'
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import authErrorMessageParser from 'utils/authErrorMessageParser'
export function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setcheckPassword] = useState("")
    const goBack = () => {
        navigation.goBack()
    }
    var errorMessage = "Kullanıcı adı veya şifre boş geçilemez!"
    const handleRegister = () => {

        if ((!email || !password) || (checkPassword != password)) {
            (!email || !password) ?
                errorMessage = ("Email veya şifre boş geçilemez!") :
                errorMessage = ("Şifreleriniz Uyuşmuyor!")
            FlashError(errorMessage)
            return;
        }
        auth().createUserWithEmailAndPassword(email, password)
            .then(() => {

                FlashError("Kaydınız Başarıyla oluşturuldu.")
                auth().signOut();
                goBack()
            })
            .catch((err) => {
                FlashError(authErrorMessageParser(err.code))
            })
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
                Sign up and get started
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
            <CustomInput
                name="Confirm Password"
                place="********"
                iconName={"ios-eye-off"}
                secure={true}
                onChangeText={setcheckPassword}
            />
            <CustomButton
                text="Sign up"
                onPress={handleRegister}
                genericStyle="primary" />
            <Divider />
            <View style={style.anotherLoginView}>
                {
                    AnotherLoginList.map((item) => <AnotherLoginCard key={item.id} list={item} />)
                }
            </View>
            <Icon
                name={"md-chevron-back-outline"}
                size={36}
                style={style.icon}
                onPress={goBack}
            />
        </KeyboardAvoidingView>
    )
}