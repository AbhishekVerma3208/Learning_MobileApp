import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginScreen from './Components/Login';
import RegisterScreen from "./Components/Register"
import DrawerComponent from "./Components/DrawerComponent"

const Stack = createNativeStackNavigator()
const App = () => {

  return (


    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{animation:"none",}}
      >
        <Stack.Screen name='DrawerComponent' component={DrawerComponent} options={{headerShown:false}}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown:false, }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
