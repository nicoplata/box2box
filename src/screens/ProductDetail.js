import { View, Text, Button, StyleSheet, Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import {products} from "../data/products"
import Header from '../components/Header';
import { AntDesign } from '@expo/vector-icons'

const ProductDetail = ({ item,  navigation}) => {

  const initialProd = products[0];

  console.log(item)

  return (
    <SafeAreaView>
      <View>
        <Header title="Detalle"/>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Ir Atras</Text>
        </Pressable>
        <View style={styles.containerImage}>
          <Image 
            style={styles.image}
            source={{
              uri:initialProd.images[2],
            }} 
          />
          <Text style={styles.title}>{initialProd.title}</Text>
          <Text style={styles.description}>{initialProd.description}</Text>
          <View style={styles.ratingContainer} >
            <AntDesign name="star" size={21} color="black" />
            <Text style={styles.rating}>{initialProd.rating}</Text>
          </View>
          <Text style={styles.price}>${initialProd.price}</Text>
        </View>
        <Button  
          title="Agregar al Carrito" 
          onPress={() => console.log("funk")}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 350,
  },
  containerImage: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "Satoshi",
  },
  description: {
    fontSize: 15,
    fontFamily: "Satoshi",
    marginVertical: 15,
  },
  ratingContainer: {
    flexDirection: "row",
  }
})

export default ProductDetail