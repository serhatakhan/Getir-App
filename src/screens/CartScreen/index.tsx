import React from "react";
import { FlatList, Text, TouchableOpacity, View, Dimensions, ScrollView } from "react-native";
import productGetir from "../../../assets/productGetir";
import CartItem from "../../components/CartItem";
import ProductItem from "../../components/ProductItem";

const {width, height} = Dimensions.get("window")

function Index() {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <FlatList
          data={productGetir.slice(0,3)}
          renderItem={({ item }) => <CartItem product={item} />}
        />

        <Text style={{padding: 15, fontWeight: "bold", color: "#5d3ebd"}}>Önerilen Ürünler</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={true} style={{backgroundColor: "white"}}>
          {productGetir.map((item, index)=> (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>

      </ScrollView>
        <View style={{position: "absolute", bottom:0, width:"100%", backgroundColor: "#f8f8f8", height: height*0.12, flexDirection: "row", alignItems: "center", paddingHorizontal: "4%"}}>
          <TouchableOpacity style={{marginTop: -10, height: height*0.06, flex: 3, backgroundColor: "#5d3ebd", justifyContent: "center", alignItems: "center", borderTopLeftRadius:8, borderBottomLeftRadius: 8}}>
            <Text style={{color: "white", fontWeight: "bold", fontSize: 15}}>Devam</Text>
          </TouchableOpacity>

          <View style={{flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center", marginTop: -10, height: height*0.06, borderTopRightRadius: 8, borderBottomRightRadius: 8}}>
            <Text style={{color: "#5d3ebd", fontWeight: "bold", fontSize: 16}}>₺24,00</Text>
          </View>
        </View>
    </View>
  );
}

export default Index;
