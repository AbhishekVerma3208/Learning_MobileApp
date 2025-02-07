import { View, Text,Image ,TouchableOpacity} from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./Home";
import LoginScreen from './Login';
import RegisterScreen from "./Register"
import Profile from './Profile';
import styles from '../Css';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";


const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
        {/* Drawer Header */}
        <View style={styles.drawerHeader}>
            <Image source={require('../assets/Learning_Xorxos.png')} style={styles.drawerLogo} />
            <Text style={styles.drawerTitle}>Learning_Xorxos</Text>
        </View>

        {/* Drawer Items */}
        <DrawerItemList {...props} />

        {/* Custom Footer */}
        <View style={styles.drawerFooter}>
            <Text style={styles.footerText}>Powered by Xorxos</Text>
        </View>
    </DrawerContentScrollView>
);

const Drawer = createDrawerNavigator();



const DrawerComponent = () => {
    return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={({ navigation }) => ({
            drawerLabelStyle: styles.drawerLabelStyle,
            drawerActiveTintColor: "#ffd700",
            drawerInactiveTintColor: "#ffffff",
            drawerStyle: { backgroundColor: "#1c1c1e", paddingTop: 20 },
            headerStyle: { backgroundColor: "#242424" },
            headerTintColor: "#ffd700",
            headerRight:()=>(
            <View>
              <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <Image source={require("../assets/ProfileLX.png")} style={styles.ProfileHeader}/>
              </TouchableOpacity>
            </View>
            ),
            drawerStatusBarAnimation:"none"
          })}
        >
          <Drawer.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name='Register' component={RegisterScreen}  options={{headerShown:false}}/>
          <Drawer.Screen name='Profile' component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerComponent