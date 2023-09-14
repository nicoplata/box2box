import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CategoryItem = ({item}) => {
  return (
    <View>
      <Text style={styles.categoryText}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
categoryText:{
    fontSize: 20,
    marginLeft: 2,
    color: colors.white,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    borderColor: colors.ligthBlue,
    borderWidth: 2,
    borderRadius: 10,

    textAlign: "center",
    padding: 5,
    margin: 2,
}
})
export default CategoryItem