import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => console.log("Press...")}>
        <Text style={styles.text}>{item.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: item.images[0] }}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: colors.heavyBlue,
    borderRadius: 10,
    borderWidth: 1,
    height: 100,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "300",
    marginLeft: 20,

  },
  image:{
    height: 80,
    width: 100,
  },
  button:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
})

export default ProductItem