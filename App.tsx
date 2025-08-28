import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from './Components/Login';
import DrawerComponent from "./Components/DrawerComponent"
import LearnerProfile from './Components/Profile';
import Grid from './Components/Grid';
import reactnative from './Components/College/Reactnative';
import Css from './Components/College/Css';
import Javascripthandbook from './Components/College/Javascripthandbook';
import Javascript from './Components/College/Javascript';
import Html from './Components/College/Html';
import Reactjs from './Components/College/Reactjs';
import WebDev from './Components/College/WebDev';
import AppDev from './Components/College/AppDev';
import RegisterScreen from './Components/Register';
import SplashScreen from './Components/Splashscreen';
import StartingScreen from './Components/StartingScreen';
import LearningJourney from './Components/Learningjourney';
import HrStudenttalk from './Components/College/HrStudenttalk';
import speak_confidently from "./Components/College/speak_confidently"
import Humanskills from './Components/College/humanskills';
import days30challenge from "./Components/College/days30challenge"
import EnglishSpeaking from "./Components/College/EnglishSpeaking"
import Nodejs from "./Components/College/nodejs"
import Expressjs from "./Components/College/express"
import MongoDb from "./Components/College/mongodb"
import Nextjs from "./Components/College/nextjs"
import Javaapp from "./Components/College/Javaapp"
import Kotlinapp from "./Components/College/Kotlinapp"
import Flutterapp from "./Components/College/Flutterapp"
import Unitygame from './Components/College/unitygame';
import Learningxorxos from "./Components/learningxorxos"

const Stack = createNativeStackNavigator()
const App = () => {

  return (


    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ animation: "none", }}
      >
        <Stack.Screen name='Startingscreen' component={StartingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false, }} />
        <Stack.Screen name='Home' component={DrawerComponent} options={{ headerShown: false }} />
        <Stack.Screen name='Splashscreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='LearnerProfile' component={LearnerProfile} />
        <Stack.Screen name='grid' component={Grid} />
        <Stack.Screen name='AppDev' component={AppDev} />
        <Stack.Screen name='WebDev' component={WebDev} />
        <Stack.Screen name='reactnative' component={reactnative} />
        <Stack.Screen name='Css' component={Css} />
        <Stack.Screen name='Javascripthandbook' component={Javascripthandbook} />
        <Stack.Screen name='Javascript' component={Javascript} />
        <Stack.Screen name='Html' component={Html} />
        <Stack.Screen name='reactjs' component={Reactjs} />
        <Stack.Screen name='Learningjourney' component={LearningJourney} />
        <Stack.Screen name='Admin' component={DrawerComponent} options={{headerShown: false}}/>
        <Stack.Screen name='HrStudenttalk' component={HrStudenttalk}/>
        <Stack.Screen name='speak_confidently' component={speak_confidently}/>
        <Stack.Screen name='humanskills' component={Humanskills}/>
        <Stack.Screen name='30dayschallenge' component={days30challenge}/>
        <Stack.Screen name='EnglishSpeaking' component={EnglishSpeaking}/>
        <Stack.Screen name='Nodejs' component={Nodejs}/>
        <Stack.Screen name='Expressjs' component={Expressjs}/>
        <Stack.Screen name='MongoDb' component={MongoDb}/>
        <Stack.Screen name='Nextjs' component={Nextjs}/>
        <Stack.Screen name='Flutterapp' component={Flutterapp}/>
        <Stack.Screen name='Kotlinapp' component={Kotlinapp}/>
        <Stack.Screen name='Javaapp' component={Javaapp}/>
        <Stack.Screen name='Unitygame' component={Unitygame}/>
        <Stack.Screen name="learningxorxos" component={Learningxorxos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
