import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Image, Text, TouchableOpacity } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";
import { Foundation } from '@expo/vector-icons';

const Stack = createStackNavigator();

function MyStack( {navigation, route} ) {
  // * Ürün Detay sayfasında bottom tabs navigator'ın görünmemesini istiyoruz.
  // * Önce routeName'i al. Eğer tanımladığımız tabHiddenRoutes içinde route'umuz varsa,
  // tabBar navigasyonumuzu gösterme dedik. Göstermek istemediğimiz bottomları böyle tanımladık.
  // name'ini alıyoruz, navigation.setOptions ile bu yolu izliyoruz. 
  // * Yukarıda 2 prop aldık {navigation, route}. Bunları da exportlarken verdik MyStack'e.
  const tabHiddenRoutes = ["ProductDetails"]
  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route)
    if (tabHiddenRoutes.includes(routeName)){
      navigation.setOptions( {tabBarStyle: {display: "none"}} )
    } else {
      navigation.setOptions( {tabBarStyle: {display: "true"}} )
    }    
  }, [navigation, route])
  

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
              <Ionicons name="close" size={25} color="white" />
            </TouchableOpacity>
          ),
          headerRight: ()=> (
            <TouchableOpacity style={{paddingRight: 10}}>
              <Foundation name="heart" size={25} color="#32177a" />
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
    </Stack.Navigator>
  );
}

export default function HomeNavigator({navigation, route}){
  return <MyStack navigation={navigation} route={route} />
}
