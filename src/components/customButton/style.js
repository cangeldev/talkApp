import { StyleSheet } from "react-native";
import colors from "assets/colors/colors";

const baseStyle = StyleSheet.create({
    container: {
        marginHorizontal: 14,
        borderRadius: 7,
        height: 45,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 20,
        fontFamily: "CooperBlackStd"
    }
})
export default {
    primary: StyleSheet.create({
        ...baseStyle,
        container: {
            ...baseStyle.container,
            backgroundColor: colors.customButtonBackGround,
        },
        buttonText: {
            ...baseStyle.buttonText,
            color: colors.loginBackGround,
        }
    }),
    secondary: StyleSheet.create({
        ...baseStyle,
        container: {
            ...baseStyle.container,
            borderWidth: 1,
            borderColor: colors.customButtonBackGround
        },
        buttonText: {
            ...baseStyle.buttonText,
            color: colors.customButtonBackGround
        }
    })
}