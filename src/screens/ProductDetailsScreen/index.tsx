import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel"

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
    <View>
      <ImageCarousel images={product?.images} />
    </View>
  );
}

export default Index;
