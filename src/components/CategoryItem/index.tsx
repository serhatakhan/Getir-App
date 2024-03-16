import React from "react";
import { Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

// ts'ye uygun olarak propsları yaz
type categoryItemProps = {
  item: Category;
};

function index({ item }: categoryItemProps) {

  const navigation = useNavigation()

  return (
    // {category: item} vererek kategorilerden hangisine basıldıysa, CategoryDetails ekranına bu bilgiyi yollayacağız.
    <TouchableOpacity onPress={()=> navigation.navigate("CategoryDetails", {category: item})}
      style={{
        width: width * 0.25,
        height: width * 0.25,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",
      }} >
      <Image
        // kare olması için iksinde de width kullandık
        style={{ width: width * 0.20, height: width * 0.20, borderRadius: 8 }}
        source={{ uri: item.src }} />
      <Text style={{ fontSize: 12, color: "#616161", fontWeight: "500" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

export default index;
