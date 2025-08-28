import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./Home";
import Profile from './Profile';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Admin from "./Admin";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props} contentContainerStyle={Styles.drawerContainer}>
    {/* Drawer Header */}
    <View style={Styles.drawerHeader}>
      <Image source={require('../Components/College/assets/Learning_Xorxos.png')} style={Styles.drawerLogo} />
      <Text style={Styles.drawerTitle}>Learning_Xorxos</Text>
    </View>

    {/* Drawer Items */}
    <DrawerItemList {...props} />

    {/* Custom Footer */}
    <View style={Styles.drawerFooter}>
      <Text style={Styles.footerText}>Powered by Xorxos</Text>
    </View>
  </DrawerContentScrollView>
);

const Drawer = createDrawerNavigator();



const DrawerComponent = () => {
  const [Email, setEmail] = useState("")

  useEffect(() => {
    const fetchEmail=async ()=>{
      const storedEmail = await AsyncStorage.getItem("email");
      setEmail(storedEmail || 'No Email');
      setLoading(false); // Email fetched, loading done
      }
      fetchEmail()
  },[])
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        drawerLabelStyle: Styles.drawerLabelStyle,
        drawerActiveTintColor: "#ffd700",
        drawerInactiveTintColor: "#ffffff",
        drawerStyle: { backgroundColor: "#1c1c1e", paddingTop: 20 },
        headerStyle: { backgroundColor: "#242424" },
        headerTintColor: "#ffd700",
        headerRight: () => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={require("../Components/College/assets/ProfileLX.png")} style={Styles.ProfileHeader} />
            </TouchableOpacity>
          </View>
        ),
        drawerStatusBarAnimation: "none"
      })}
    >
       {/* Always visible screens */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />

      {/* Admin screen: only added if email matches, and hidden from drawer */}
      {Email === "melodicsinspiration2015@gmail.com" && (
        <Drawer.Screen
          name="Admin"
          component={Admin}
        />
      )}
    </Drawer.Navigator>
  )
}

const Styles = StyleSheet.create({
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
  ProfileHeader: {
    width: 55,
    height: 60,
    right: 5
  }


})

export default DrawerComponent