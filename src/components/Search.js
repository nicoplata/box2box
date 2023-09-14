import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../theme/colors'

const Search = ({ textInput, setTextInput }) => {

  const onHandleText = (value) => {
    setTextInput(value);
  };

  const clear = () => {
    setTextInput(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onHandleText}
        value={textInput}
        style={styles.input}
        placeholder="Busca un producto aquí..." 
      />
      <Pressable onPress={() => clear()}>
        <AntDesign name="close" size={30} color="black" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },
    input:{
        width: "78%",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.heavyBlue,
        padding: 10,
        fontSize: 20,
        marginRight: 15,
    },
})

export default Search