import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    //Home
    UpperPart: {
        backgroundColor: "black",
        height:150
    },
    UpperImagepart:{
        width:390,
        height:150,
        top:-3,
        position:"absolute"    
    },
    Search: {
        backgroundColor: "white",
        borderRadius: 6,
        borderWidth: 2,
        width: 350,
        height: 53,
        top: 50,
        left: 20,
        borderColor: "#ffa027"
    },

    //App
    drawerContainer: {
        flex: 1,
        backgroundColor: "#1c1c1e",
      },
      // Drawer Header
      drawerHeader: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#242424",
      },
      drawerLogo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
      },
      drawerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffd700", // Gold color
      },
      // Drawer Label Style
      drawerLabelStyle: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: -10,
      },
      // Drawer Footer
      drawerFooter: {
        marginTop: "auto",
        padding: 20,
        backgroundColor: "#242424",
      },
      footerText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 14,
      },
      ProfileHeader:{
        width:55,
        height:60,
        right:5
      }
    

})

export default Styles