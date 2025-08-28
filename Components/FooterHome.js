import React from "react";
import {View,Text,StyleSheet, TouchableOpacity,Linking} from "react-native"
import { useNavigation } from "@react-navigation/native";

const FooterHome =()=>{
    
    const navigation=useNavigation();

    return(
        <View style={Styles.Footer}>

            <Text style={{color:"white",top:20,left:20}}>
                Get You Know <View><Text style={{top:22,color:"white",right:90}}>Us</Text></View>
            </Text>

            <TouchableOpacity onPress={()=>navigation.navigate('learningxorxos')} style={{top:50,left:20,color:"#dfac3f"}}>
                    <Text style={{color:"#dfac3f"}}>
                    About Learning_Xorxos
                    </Text>
            </TouchableOpacity>

            
            <Text style={{color:"white",left:230,bottom:23}}>
            Connect with <View><Text style={{top:22,color:"white",right:85}}>Us</Text></View>
            </Text>
            

            <View style={{left:230,top:5}}>
            <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/AbhishekVerma3208")}>
                <Text style={{color:"#dfac3f"}}>
                Github
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>Linking.openURL("https://www.linkedin.com/in/abhishek-verma-736a13292/")}>
                <Text style={{color:"#dfac3f"}}>
                Linkedin
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/abhiverma8100/?utm_source=qr&igsh=dHJmYmN5bW0wcXNz#")}>
                <Text style={{color:"#dfac3f"}}>
                Instagram
                </Text>
            </TouchableOpacity>

            </View>
            <Text style={Styles.footertext}>
                © 2024 Xorxos. All Rights Reserved.
            </Text>
        </View>
    )
}

const Styles= StyleSheet.create({
    Footer:{
    height:190,
    backgroundColor:"#1c2d4b"
    },
    footertext:{
        color: "#fff",
        fontSize: 14,
        marginBottom: 10,
        top:40,
        left:80
    }
})

export default FooterHome