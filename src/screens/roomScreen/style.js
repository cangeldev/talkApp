import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        backgroundColor: colors.homeBackGround,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
    },
    backView: {
        flexDirection: "row",
        width: 96,
        marginLeft: -5
    },
    backViewText: {
        fontWeight: "bold",
        fontSize: 17,
        color: colors.loginBackGround,
        alignSelf: "center",
        marginLeft: -2
    },
    backViewTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: colors.loginBackGround,
        flex: 1,
        textAlign: "center"
    },
    icon: {
        width: 96,
        fontSize: 27,
        textAlign: "right"
    },
    createRoomText: {
        backgroundColor: colors.white,
        fontSize: 12,
        color: colors.darkGreyTwo,
        elevation: 5,
        marginHorizontal: 5,
        height: 28,
        textAlignVertical: "center",
        paddingHorizontal: 10,
        alignSelf: "center",
        marginTop: 15,
        marginBottom: 10,
        borderRadius: 10,
        overflow: "hidden"
    },

})