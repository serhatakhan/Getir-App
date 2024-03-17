import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const TypeBox = ( {setCat, item, active}:{setCat:any, item:string, active:string} )=>{
    return (
        // her basışta active'imiz item olduğu için ve active item'a eşit olduğu için bg'yi mor yaptı
        <TouchableOpacity onPress={()=> setCat(item)} style={[{flexDirection: "row", alignItems: "center", paddingHorizontal: 10, borderRadius: 8, height:height*0.05, marginRight: 12, color: "#7849f7", fontWeight:600}, item === active ? {backgroundColor: "#5c3ebc"} : {borderColor: "#f0eff7", borderWidth: 1.5} ]}>
            <Text style={[{fontSize: 14, color: "#7849f7", fontWeight:"600"}, item===active && {color: "white"} ]}>{item}</Text>
        </TouchableOpacity>
    )
}

function index() {
  // hangisini aktif olduğu ile ilgili state
  const [category, setCategory] = useState<String>("Birlikte İyi Gider");

  return (
    <ScrollView
      style={{ width: "100%", backgroundColor: "white", height: height * 0.072, flexDirection: "row", paddingVertical: height*0.010, paddingHorizontal: 7, borderBottomColor: "lightgray", borderBottomWidth: 1}}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item, i)=> (
        <TypeBox key={i} item={item} active={category} setCat={setCategory} />
      ))}
    </ScrollView>
  );
}

export default index;
