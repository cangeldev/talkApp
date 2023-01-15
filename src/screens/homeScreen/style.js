import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.loginBackGround
    },
    headerText: {
        color: colors.homeBackGround,
        fontSize: 35,
        textAlign: "center",
        paddingVertical: 3,
        fontWeight: "bold"
    },
    divider: {
        borderColor: colors.lightGrey,
        borderBottomWidth: 1,
        marginBottom: 5
    },

})