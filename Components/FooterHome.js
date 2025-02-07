import React from "react";
import {View,Text,StyleSheet, TouchableOpacity} from "react-native"

const FooterHome =()=>{
    return(
        <View style={Styles.Footer}>

            <Text style={{color:"white",top:20,left:20}}>
                Get You Know <View><Text style={{top:22,color:"white",right:90}}>Us</Text></View>
            </Text>

            <TouchableOpacity>
                    <Text style={{top:50,left:20,color:"#dfac3f"}}>
                    About Learning_Xorxos
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{color:"white",left:230,bottom:23}}>
            Connect with <View><Text style={{top:22,color:"white",right:85}}>Us</Text></View>
            </Text>
            </TouchableOpacity>

            <View style={{left:230,top:5}}>
            <TouchableOpacity>
                <Text style={{color:"#dfac3f"}}>
                Facebook
                </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{color:"#dfac3f"}}>
                Twitter
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
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