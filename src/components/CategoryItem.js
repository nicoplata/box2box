import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { Pressable } from 'react-native'
import { setCategoryPressed } from "../redux/slice/homeSlice"
import { useDispatch } from 'react-redux'

const CategoryItem = ({item, navigation}) => {

  const dispatch = useDispatch();

  const onHandleItem = () => {
    dispatch(setCategoryPressed(item));
    navigation.navigate("products", {item: item});
  }

  return (
    <Pressable onPress={() => onHandleItem()}>
      <Text style={styles.categoryText}>{item}</Text>
    </Pressable>
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