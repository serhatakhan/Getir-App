import React from 'react'
import {View, Text, Image} from "react-native"
import "./styles"
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

function index() {
  return (
    <View style={styles.headerMain}>
        <View style={styles.headerOne}>
            <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}} />
            <View style={styles.headerOneView}>
                <Text style={{fontWeight: "600", fontSize: 16}}>Ev</Text>
                <Text style={{fontWeight: "500", fontSize: 12.5, color: "#6e7480", marginLeft: 6, marginRight: 1}}>Dedebaşı Blv. Değirmenaltı Mah.</Text>
                <Entypo name="chevron-right" size={23} color="#5d3ebd" />
            </View>
            <View style={styles.headerTwo}>
              <Text style={{fontWeight: "bold", fontSize: 10, color: "#5d3ebd"}}>TVS</Text>
              <Text style={{fontWeight: "bold", fontSize: 20, color: "#5d3ebd"}}>13<Text style={{fontSize: 16}}>dk</Text></Text>
            </View>

        </View>

        <View></View>
    </View>
  )
}

export default index