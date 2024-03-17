import React, { useRef, useState } from "react";
import { FlatList, Image, Dimensions, View, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

function index({ images }: { images: string[] }) {
  // birden fazla fotoğrafı olan ürünlerde, altında nokta olması için state
  const [activeIndex, setActiveIndex] = useState(0)

  // diğer resme geçtiğimizde onun indexini algılayan fonk (hangi resimdeyiz yani?)
  const onViewRef = useRef((viewableItems)=> {
    if (viewableItems.viewableItems.length > 0){
        setActiveIndex(viewableItems.viewableItems[0].index || 0)
    }
  })
  // ne kadarlık bir yüzde geçince diğer resme geçilecek
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50})


  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        height: height * 0.25,
        paddingTop: 25,
      }}
    >
      <FlatList
        data={images}
        style={{ width: width * 0.5, height: height * 0.21 }}
        renderItem={(item) => (
          <Image
            source={{ uri: item.item }}
            style={{
              width: width * 0.5,
              height: height * 0.21,
              resizeMode: "stretch",
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      ></FlatList>

      <View>
        <View style={{flexDirection: "row", alignItems: "center", width: 30, height: 12, justifyContent: "space-around"}}>
            {images.map((image, index)=> (
                <View key={index} style={[styles.dot, {backgroundColor: activeIndex === index ? "#5d3ebd" : "#f2f0fd"}]} />
            ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        borderRadius: 20
    }
})

export default index;
