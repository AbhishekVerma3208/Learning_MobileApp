import {View,Text,TextInput,ScrollView,Image} from "react-native"
import Css from "../Css"
import Grid from "./Grid"
import CoursesScreen from "./CourceSection"
import InteractiveLearning from "./InteractiveLearning"
import FooterHome from "./FooterHome"


const Home = () => {
    return (
        <View>
            <View >
                <ScrollView>
                    <View style={Css.UpperPart}>
                        <Image source={require("../assets/LearningHome.png")} style={Css.UpperImagepart}/>
                        <TextInput style={Css.Search} placeholder="What Type of Learning You Want ... " />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Grid />
                        <CoursesScreen />
                        <InteractiveLearning />
                        <FooterHome/>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Home