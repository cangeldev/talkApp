import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginLeft: 18,
        alignSelf: "flex-start",
        borderRadius: 10,
        marginRight: 70,
        marginBottom: 10,
        minWidth: 110
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 10,
        alignSelf: "flex-start",
        color: colors.messageColor
    },
    message: {
        marginHorizontal: 10,
        paddingRight: 20,
        marginBottom: 10,
        marginTop: -3,
        color: colors.black
    },
    date: {
        marginHorizontal: 8,
        marginVertical: 2,
        fontSize: 7,
        position: "absolute",
        bottom: 0,
        right: 0
    },
    messageBoxIcon: {
        position: 'absolute',
        top: -13,
        left: -10
    }
})