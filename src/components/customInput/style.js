import { StyleSheet } from "react-native";
import colors from "assets/colors/colors";
export default StyleSheet.create({
    container: {
        marginTop: 25
    },
    inputContainer: {
        marginHorizontal: 14,
        borderRadius: 6,
        borderWidth: 1.3,
        borderColor: colors.iconBackGround,
        paddingHorizontal: 14,
        fontWeight: "400",
        fontSize: 15,
        color: colors.black,
        height: 45,
    },
    text: {
        backgroundColor: colors.loginBackGround,
        alignSelf: 'flex-start',
        paddingHorizontal: 5,
        fontSize: 12,
        position: "absolute",
        left: 22,
        top: -8,
        fontWeight: "bold",
        color: colors.iconBackGround,
    },
    icon: {
        alignSelf: "flex-start",
        position: "absolute",
        right: 20,
        top: 12,
        color: colors.iconBackGround,
    }
})