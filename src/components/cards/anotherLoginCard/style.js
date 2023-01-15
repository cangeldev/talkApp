import { StyleSheet } from "react-native";
import colors from "assets/colors/colors";

export default StyleSheet.create({
    image: {
        width: 30,
        height: 30,
    },
    view: {
        elevation: 5,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        backgroundColor: colors.loginBackGround
    }
})