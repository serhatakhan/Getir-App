import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

function Index() {
  return (
    <View
      style={{
        alignItems: "center", 
        justifyContent:"center",
        width: "100%",
        height: height * 0.118,
        backgroundColor: "white",
        position: "absolute",
        bottom: 0
      }}>
      <TouchableOpacity style={{alignItems: "center", justifyContent:"center", backgroundColor: "#5d39c1", marginTop: -10, height: height*0.06, width: "90%", marginHorizontal: "5%", borderRadius: 8}}>
        <Text style={{color: "white", fontWeight: "bold"}}>Sepete Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Index;
