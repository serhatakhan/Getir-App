import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions"; //tüm aksiyonları çağır
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

type cartButtonType = {
  addItemToCart: (a:Product)=>void
  item: Product
}

function Index({item, addItemToCart}:cartButtonType) {
  return (
    <View
      style={{
        alignItems: "center", 
        justifyContent:"center",
        width: "100%",
        height: height * 0.118,
        backgroundColor: "white",
        position: "absolute",
        bottom: 0
      }}>
      <TouchableOpacity onPress={()=> addItemToCart(item)} style={{alignItems: "center", justifyContent:"center", backgroundColor: "#5d39c1", marginTop: -10, height: height*0.06, width: "90%", marginHorizontal: "5%", borderRadius: 8}}>
        <Text style={{color: "white", fontWeight: "bold"}}>Sepete Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addItemToCart: (product: Product)=> 
      dispatch(actions.addToCart({quantity:1, product}))
  }
}

export default connect(null, mapDispatchToProps)(Index);
// burada ilk parametre null çünkü herhangi bir state'i propsa atacak metodumuz yok.
// şu an dispatchleri atmak istiyoruz. dispatchleri atmak istediğimizde 2.parametreye vermemiz lazım.
