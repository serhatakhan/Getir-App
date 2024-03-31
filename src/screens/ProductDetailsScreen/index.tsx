import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel"
import DetailBox from "../../components/DetailBox"
import DetailProperty from "../../components/DetailProperty"
import CardButton from "../../components/CardButton"

function Index(props) {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    // sayfaya her girildiğinde bizim productımızı propstan al
    setProduct(props.route.params.product);
  }, []);

  // console.log(product)

  if(!product){
    return <ActivityIndicator color={"#5d3ebd"} />
  }

  return (
    // burada en dıştaki view'a background:red verince gördük ki yüksekliği ortada bir yerde bitiyor.
    // böyle olunca da absolute ve bottom:0 verdiğimiz CardButton bileşenimiz en alta gidemiyor, sayfanın ortasında kalıyordu. çünkü o an sayfanın yüksekliği o kadardı.
    // flex:1 vererek tüm ekranı kaplamasını sağladık. böylece button bileşeni en alta gidebildi.
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageCarousel images={product?.images} />

        <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />

        <Text style={{paddingHorizontal: 15, paddingVertical: 14, color: "#808b99", fontWeight: "600"}}>Detaylar</Text>

        <DetailProperty />
      </ScrollView>

      <CardButton />
    </View>
  );
}

export default Index;
