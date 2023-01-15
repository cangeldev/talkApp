import { showMessage } from "react-native-flash-message";
import colors from 'assets/colors/colors';

export function FlashError(message) {
    showMessage({
        message: message,
        type: "info",
        animationDuration: 400,
        duration: 800,
        backgroundColor: colors.loginBackGround,
        statusBarHeight: -5,
        titleStyle: {
            alignSelf: "center",
            fontSize: 16,
            color: colors.customButtonBackGround
        }
    })
}