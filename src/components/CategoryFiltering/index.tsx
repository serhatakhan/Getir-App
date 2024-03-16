import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";

const { width, height } = Dimensions.get("window");

const CategoryBox = ({item,active}:{item:Category, active:Category}) =>{
    return (
        <View style={[{paddingHorizontal: 9, flexDirection: "row", alignItems: "center"}, item.name === active.name && {borderBottomColor: "#ffd00c", borderBottomWidth: 2.6}]}>
            <Text style={{fontSize: 14, color: "white", fontWeight:600}}>{item.name}</Text>
        </View>
    )
}

function index ( {category}:{category:Category} ) {
  // hangisini aktif olduğu ile ilgili state
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{
        width: "100%",
        height: height * 0.062,
        backgroundColor: "#7849f7",
      }}>
      {categories.map((item, i) => (
        <CategoryBox key={i} item={item} active={category}/>
      ))}
    </ScrollView>
  );
}

export default index;
