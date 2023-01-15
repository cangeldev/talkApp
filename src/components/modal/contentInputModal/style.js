import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    txtInput: {
        backgroundColor: colors.loginBackGround,
        flex: 1, borderRadius: 40,
        height: 50,
        marginTop: 5,
        paddingHorizontal: 15,
        fontSize: 18
    },
    modalView:
    {
        flexDirection: "row",
        height: 75,
        width: "100%",
        position: "absolute",
        bottom: -28,
    },
    modalButton: {
        width: 62,
        height: 62,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.homeBackGround,
        borderRadius: 40,
        marginLeft: 5,
        marginRight: -11
    }

})