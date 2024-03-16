import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const TypeBox = ( {item, active}:{item:string, active:string} )=>{
    return (
        <TouchableOpacity style={[{flexDirection: "row", alignItems: "center", paddingHorizontal: 10, borderRadius: 8, height:height*0.05, marginRight: 12, color: "#7849f7", fontWeight:600}, item === active ? {backgroundColor: "#5c3ebc"} : {borderColor: "#f0eff7", borderWidth: 1.5} ]}>
            <Text style={[{fontSize: 14, color: "#7849f7", fontWeight:"600"}, item===active && {color: "white"} ]}>{item}</Text>
        </TouchableOpacity>
    )
}

function index() {
  // hangisini aktif olduğu ile ilgili state
  const [category, setCategory] = useState<String>("Birlikte İyi Gider");

  return (
    <ScrollView
      style={{ width: "100%", backgroundColor: "white", height: height * 0.072, flexDirection: "row", paddingVertical: height*0.010, paddingHorizontal: 8 }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item, i)=> (
        <TypeBox key={i} item={item} active={category} />
      ))}
    </ScrollView>
  );
}

export default index;
