import React from 'react'
import {ScrollView} from "react-native"
import "./styles"
import HeaderMain from "../../components/HeaderMain"
import BannerCarousel from "../../components/BannerCarousel"
import MainCategories from "../../components/MainCategories"

function Index() {
  return (
    // stickyHeaderIndices={[0]} yani <HeaderMain /> sabit kalsın scroll hareketinde
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor: "#f5f5f5"}}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  )
}

export default Index