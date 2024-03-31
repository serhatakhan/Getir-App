import React from 'react'
import { View, Text } from 'react-native';

// detail box componentinin proplarını tanımla
type DetailBoxProps = {
    price: number
    name: string
    quantity: string
}

function Index({price, name, quantity}:DetailBoxProps) {
  return (
    <View style={{width: "100%", backgroundColor: "white", alignItems: "center"}} >
        <Text style={{color: "#5d3ebd", fontWeight: "bold", marginTop: 12, fontSize: 20}}>
            <Text>₺</Text>
            {price}
        </Text>

        <Text style={{fontWeight: "600", fontSize: 18, marginTop: 12}}>
            {name}
        </Text>

        <Text style={{color: "#848897", fontWeight: "600", marginTop: 6, paddingBottom: 17}}>
            {quantity}
        </Text>
    </View>
  )
}

export default Index
