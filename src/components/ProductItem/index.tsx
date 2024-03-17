import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Product } from '../../models';

const {width, height} = Dimensions.get("window")

// propslar için type tanımla
type productItemType = {
    item: Product
}

function index( {item}:productItemType ) {
  return (
    <TouchableOpacity style={{width: width*0.29, height: height*0.25, marginTop: 12, marginLeft: 12, marginBottom: 5 }}>
        <Image style={{width: width*0.29, height: width*0.28, borderRadius: 12, borderWidth: 0.2, borderColor: "gray"}} source={{uri: item.image}} />
        <View style={{flexDirection: "row", marginTop: 10, alignItems: "center"}}>
            <Text style={{fontSize: 14, color: "#747990", textDecorationLine: "line-through"}}>
                <Text>₺</Text>{item.fiyat}
            </Text>
            <Text style={{color: "#5c3ebc", fontWeight: "bold", fontSize: 16, marginLeft: 4}}>
                <Text>₺</Text>{item.fiyatIndirimli}
            </Text>
        </View>

        <Text style={{fontWeight: "600", fontSize: 13, marginTop: 6}}>{item.name}</Text>
        <Text style={{color: "#747990", fontSize: 12, fontWeight: "600", marginTop: 4}}>{item.miktar}</Text>

        <View style={{width: 30, height: 30, shadowRadius: 3.8, shadowOpacity: 0.15, shadowColor: "#5c3ebc", borderWidth: 0.4, borderColor: "lightgrey", backgroundColor: "white", position: "absolute", right: -6, top: -6, borderRadius: 8, alignItems: "center", justifyContent: "center"}}>
            <Entypo name="plus" size={22} color="#5d3ebd" />
        </View>
    </TouchableOpacity>
  )
}

export default index