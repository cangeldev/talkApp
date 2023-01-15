import { StyleSheet } from "react-native";
import colors from "assets/colors/colors";
export default StyleSheet.create({
    containerWrap: {
        flex: 1,
        height: 1,
        backgroundColor: colors.darkGrey,
    },
    container: {
        marginHorizontal: 25,
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        width: 90,
        textAlign: 'center',
        color: colors.darkGrey,
        fontSize: 12,

    }
})