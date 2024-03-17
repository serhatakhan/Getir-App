import React from "react";
import { Text, View } from "react-native";
import ProductItem from "../ProductItem";
import productGetir from "../../../assets/productGetir";

function index() {
  return (
    // Main View
    <View>
      {/* 2 product olan kısım */}
      <View style={{flexDirection: "row", alignItems: "center", backgroundColor: "white", paddingTop: 5}}>
        {productGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>

      <Text style={{color: "gray", fontWeight: "bold", alignItems: "center", paddingHorizontal: 8, paddingVertical: 12}}>Çubuk</Text>

      {/* diğer productların olduğu kısım */}
      <View style={{flexDirection: "row", flexWrap: "wrap", flex: 1, paddingVertical: 10, backgroundColor: "white"}}>
        {/* slice(2) diyerek 2'den sonrakileri al dedik. çünkü ilk 2'yi kullandık */}
        {productGetir.slice(2).map((item)=> (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default index;
