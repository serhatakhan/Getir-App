import React, { useState } from "react";
import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

function Index() {
  // bunları string şeklinde state'de tuttuk
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ]);

  // * asıl component içinde böyle bir component yazdık
  // * sonra detail isminde prop gelcek dedik ve onun tipini belirledik
  const TextComponent = ({
    detail,
    index,
  }: {
    detail: string;
    index: number;
  }) => {
    return (
      <View
        style={{
          paddingVertical: 10,
          // details.length - 1 --> details dizisinin son elemanı isen borderWidth'in olmasın dedik
          borderBottomWidth: index === details.length-1 ? 0 : 0.44,
          borderBottomColor: "lightgray",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        {/* index===0 ? 10 : 13 --> prop olarak gelen index 0'a eşitse büyüklüğü 10 olsun dedik */}
        <Text
          style={{
            color: index === 0 ? "black" : "#687482",
            fontSize: index === 0 ? 12 : 13,
            fontWeight: index === 0 ? "400" : "500",
          }}>
          {detail}
        </Text>

        {/* ilk sıradaki elemana koyma dedik yani */}
        {index !== 0 && <Feather name="chevron-down" size={24} color="#9f9f9f" />}
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 8,
      }}
    >
      {/* map'i 2 şekilde kullanabiliriz:
        1 > süslü parantez açarız ve return ederiz.
        2 > direk normal parantez açarız. */}
      {details.map((item, index) => (
        <TextComponent detail={item} index={index} key={index} />
      ))}
    </View>
  );
}

export default Index;
