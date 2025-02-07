import React, { useState } from "react";
import { View, Text, Image, StyleSheet,ScrollView,Button, TouchableOpacity } from "react-native";

const Profile = () => {

  return (
    <View style={{ flex: 1, }}>
      <ScrollView style={{ height: 800 }}>
        <Image source={require('../assets/Profile_Wallpaper.jpg')} style={{ width: "100%", height: 1000, position: "absolute" }} />
        <View style={styles.Dataprofile}>
          <Image source={require('../assets/Learning_Xorxos.png')} style={{ width: "100", height: "100", position: "absolute", borderWidth: 2, borderRadius: 200, top: -70, left: 100 }} />
        </View>

        <View style={{ left: 55, top: -205, }}>
          <View style={styles.databackcolor}><Text style={{ fontSize: 21, fontWeight: "bold" }}>Username :</Text></View>
          <View style={styles.databackcolor}><Text style={{ fontSize: 21, fontWeight: "bold" }}>Full Name :</Text></View>
          <View style={styles.databackcolor}><Text style={{ fontSize: 21, fontWeight: "bold" }}>Email ID :</Text></View>
          <View style={styles.databackcolor}><Text style={{ fontSize: 21, fontWeight: "bold" }}>Phone No :</Text></View>
          <View style={styles.databackcolor}><Text style={{ fontSize: 21, fontWeight: "bold" }}>Gender :</Text></View>
          <View style={styles.databackcolor}><Text style={{ fontSize: 21, fontWeight: "bold" }}>Country :</Text></View>
        </View>
        <TouchableOpacity><Text style={{color:"white", bottom:255,left:230,backgroundColor:"red",width:100,height:23,textAlign:"center",borderRadius:100}}>SIGN OUT</Text></TouchableOpacity>
        <Text style={styles.footertext}>
          © 2024 Xorxos. All Rights Reserved.
        </Text>
      </ScrollView>
    </View>
  )

}
const styles = StyleSheet.create({

  Dataprofile: {
    width: 300,
    height: 600,
    backgroundColor: "white",
    top: 140,
    left: 43,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: "black"
  },
  databackcolor: {
    width: 130,
    height: 40,
    top: -100,
    backgroundColor: "#bc720e",
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "center"
  },
  footertext:{
    color: "#fff",
    fontSize: 14,
    marginBottom: 10,
    top:930,
    left:80,
    position:"absolute"
}
});

export default Profile;
