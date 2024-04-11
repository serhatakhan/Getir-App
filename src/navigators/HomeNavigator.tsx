import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";
import { Foundation } from '@expo/vector-icons';
import CartScreen from "../screens/CartScreen"
import { connect } from "react-redux";
import { Product } from "../models";
import * as actions from "../redux/actions/cartActions"

const {width, height} = Dimensions.get("window")

const Stack = createStackNavigator();

function MyStack( {navigation, route, cartItems, clearCart}:{cartItems:{product: Product, quantity: number}[], clearCart:()=>void} ) {
  // * Ürün Detay sayfasında bottom tabs navigator'ın görünmemesini istiyoruz.
  // * Önce routeName'i al. Eğer tanımladığımız tabHiddenRoutes içinde route'umuz varsa,
  // tabBar navigasyonumuzu gösterme dedik. Göstermek istemediğimiz bottomları böyle tanımladık.
  // name'ini alıyoruz, navigation.setOptions ile bu yolu izliyoruz. 
  // * Yukarıda 2 prop aldık {navigation, route}. Bunları da exportlarken verdik MyStack'e.
  // YANİ DİYORUZ Kİ EĞER SEN BU ARRAY'İN İÇİNDEKİ BİR SCREEN İSEN BOTTOM TAB NAVİGATOR'U GÖSTERME !!
  const tabHiddenRoutes = ["ProductDetails", "CartScreen"]
  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route)
    if (tabHiddenRoutes.includes(routeName)){
      navigation.setOptions( {tabBarStyle: {display: "none"}} )
    } else {
      navigation.setOptions( {tabBarStyle: {display: "true"}} )
    }    
  }, [navigation, route])


  //sepetteki ürünlerin parasını toplayan metot
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const getProductsPrice = ()=>{
    let total = 0
    cartItems.forEach(cartItem => {
      const price = (total += cartItem.product.fiyat)
      setTotalPrice(price)
    })
    // kart item boş olduğunda yukarıda koda girip sıfırlamıyor yani totale 0 vermiyor. burada sıfırladık. 
    // yani demiş olduk ki cartItems.length 0'a eşitse totalPrice'ı 0 yap dedik.
    cartItems.length ? null : setTotalPrice(0)
  }
  useEffect(()=> {
    getProductsPrice()
  },[cartItems, navigation]) //her cartItems değiştiğinde çalışmalı

  

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#5c3ebc",
          },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "white",
          // header'ın altındaki beyaz çizgiyi yok et
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#5c3ebc",
          },
          headerTitle: () => (
            <Text style={{fontWeight: "bold", fontSize: 17, color: "white"}}>Ürünler</Text>
          ),
          headerRight: ()=> (
            <TouchableOpacity onPress={()=> navigation.navigate("CartScreen")} style={{width: width*0.22, height: 33, backgroundColor: "white", marginRight: width*0.03, borderRadius: 10, flexDirection: "row", alignItems: "center"}}>
              <Image source={require("../../assets/cart.png")} style={{width: 24, height: 24, marginLeft: 5, marginRight: 3}} />
              <View style={{flex: 1, justifyContent: "center", alignItems: "center", height: 33, backgroundColor: "#f3effe", borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
                <Text style={{color: "#5d3ebd", fontWeight: "bold", fontSize: 12}}>₺{totalPrice.toFixed(2)}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "white",
          // header'ın altındaki beyaz çizgiyi yok et
          headerShadowVisible: false,
          // header'ın soluna x koyacağız
          headerLeft: ()=> (
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{paddingLeft: 10}}>
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight: ()=> (
            <TouchableOpacity style={{paddingRight: 10}}>
              <Foundation name="heart" size={26} color="#32177a" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#5c3ebc",
          },
          headerTitle: () => (
            <Text style={{fontWeight: "bold", fontSize: 17, color: "white"}}>Ürün Detayı</Text>
          ),
        }}
      />
      <Stack.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        headerBackTitleVisible: false,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#5c3ebc",
        },
        headerTitle: ()=> (
          <Text style={{fontWeight: "bold", fontSize: 16, color: "white"}}>Sepetim</Text>
        ),
        headerLeft: ()=> (
          <TouchableOpacity onPress={()=> navigation.goBack()} style={{paddingLeft: 10}} >
            <Ionicons name="close" size={26} color="white" />
          </TouchableOpacity>
        ),
        headerRight: ()=> (
          <TouchableOpacity style={{paddingRight: 10}} onPress={()=> clearCart()} >
            <Ionicons name="trash" size={25} color="white" />
          </TouchableOpacity>
        ),
      }}
      />
    </Stack.Navigator>
  );
}

//statelerimizi propslara iletecek olan metot
const mapStateToProps = (state)=>{
  const {cartItems} = state;
  return{
    cartItems: cartItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    clearCart: () => dispatch(actions.clearCart())
  }
}

function HomeNavigator({navigation, route, cartItems, clearCart}:{clearCart: ()=>void}){
  return <MyStack navigation={navigation} route={route} cartItems={cartItems} clearCart={clearCart} />
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator)
