import { StyleSheet } from "react-native";
import colors from "assets/colors/colors";

export default StyleSheet.create({
   container: {
      backgroundColor: colors.loginBackGround,
      flex: 1
   },
   logo: {
      width: "100%",
      height: "10%",
      resizeMode: "center",
      marginTop: 45,
      marginBottom: 20
   },
   helpText: {
      textDecorationLine: "underline",
      alignSelf: "center",
      marginTop: 35,
      color: "red",
      fontWeight: "300"

   },
   anotherLoginView: {
      flexDirection: "row",
      alignSelf: "center",
      width: 200,
      justifyContent: "space-around",
      marginTop: 30,
   },
   image: {
      alignSelf: "center",
      width: 170,
      height: 170,
      resizeMode: "stretch",
   },
   text: {
      marginLeft: 24,
      fontSize: 17,
      color: "#6a005b",
      marginTop: 30,
      fontFamily: "CooperBlackStd"
   },

})