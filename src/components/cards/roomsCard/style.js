import { StyleSheet, Dimensions } from "react-native";
import colors from "assets/colors/colors";
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    roomContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: (windowWidth / 2) - 20,
        margin: 5,
        height: 200,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#DCDCDC",
    },
    text: {
        color: colors.homeBackGround,
        fontSize: 20,
        backgroundColor: colors.loginBackGround
    },
    imageBackground: {
        opacity: 0.1,
        width: "99%"
    }
})