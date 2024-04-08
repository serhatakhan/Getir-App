import React from 'react'
import { Image, Text, View, Dimensions } from 'react-native'
import { Product } from '../../models'

// propun tipini ayarla
type CartItemProps = {
    product: Product
}

const {width, height} = Dimensions.get("window")

function Index({product}:CartItemProps) {
  return (
    <View style={{width: "100%", backgroundColor: "white"}}>
        <View style={{borderBottomWidth: 0.4, borderBottomColor: "lightgray", width:width*0.92, height: height*0.13, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: width*0.04, backgroundColor: "white", }}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image source={{uri: product.image}} style={{height: height*0.09, width:height*0.09 }} />
                <View style={{marginLeft: 8}}>
                    {/* product name'e maxWidth: width*0.46 vererek uzunluğunu kısalttık. sayılara yaklaşıyordu ismi uzun olan ürünler */}
                    <Text style={{fontSize: 13, fontWeight: "600", maxWidth: width*0.46}}>{product.name}</Text>
                    <Text style={{fontSize: 12, marginTop: 3, color: "#848897", fontWeight: "600"}}>{product.miktar}</Text>
                    <Text style={{color: "#5d3ebd", fontWeight: "bold", marginTop: 6, fontSize: 15}}>{product.fiyat}₺</Text>
                </View>
            </View>

            <View style={{shadowOpacity: 0.4, shadowColor: "gray", flexDirection: "row", justifyContent: "space-around", alignItems:"center", width: width*0.21, height: height*0.037, borderColor: "lightgrey", borderWidth: 0.5, borderRadius: 10}}>
                <View style={{flex: 1, alignItems: "center"}}>
                    <Text>-</Text>
                </View>
                <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#5d3ebd", height: height*0.037}}>
                    <Text style={{fontWeight: "bold", color: "white", fontSize: 12}}>2</Text>
                </View>
                <View style={{flex: 1, alignItems: "center"}}>
                    <Text>+</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Index