import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const AddItem = ({ text, setText, addItem }) => {
  return (
    <View style={styles.buttonContainer}>
        <View style={styles.containerInput}>
          <TextInput 
          placeholder="escriba aqui un item..." 
          style={styles.input}
          value={text}
          onChangeText={(value) => setText(value)} 
          />
        </View>

        <Pressable style={styles.button} onPress={() => addItem()}>
          <Ionicons name="add-circle-outline" size={48} color="red" />
        </Pressable>        
      </View>
  )
}

const styles = StyleSheet.create({
    input: {
      padding: 15,
      padding: 5,
      fontSize: 18,
    },
  
    containerInput: {
      marginTop: 15,
      borderColor: "red",
      borderWidth: 1,
    },
    
    buttonContainer: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    button: {
      marginTop: 15,
      marginLeft: 15,
    },
});

export default AddItem