import React from "react";
import {View,Text,StyleSheet,ScrollView,FlatList} from "react-native"

const Data =()=>{
  return  [ 
    { id: 1, users: [1, 2] },
    { id: 2, users:"resftv" },
    { id: 3, users:"resftv" },
    { id: 4, users:"resftv" },
    { id: 5, users: [1, 2] },
    { id: 6, users:"resftv" },
    { id: 7, users:"resftv" },
    { id: 8, users:"resftv" }
  ]    
}

const Grid=()=>{
    return(
        <View style={Styles.container}>
            <FlatList 
            data={Data()}
            renderItem={({item})=>(
                <View style={Styles.GridContainer}>
                    <Text style={{}}>
                        {item.users}
                    </Text>
                </View>
            )}
            keyExtractor={(item)=>item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            nestedScrollEnabled={true}
            />
        </View>
    )
}

 const Styles=StyleSheet.create({
    container:{
         backgroundColor:"#101929"
    },
    GridContainer:{
        borderWidth:2,
        borderRadius:7,
        borderColor:"black",
        left:10,
        height: 179,
        width:150,
        marginRight:6,
        backgroundColor:"white"
    }
})
export default Grid