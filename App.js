import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {

  const initialState = [
    { id: 1, text: "Harina"},
    { id: 2, text: "Azucar"},
    { id: 3, text: "Cereales"},
  ]

  const [text, setText] = useState("");
  const [list, setList] = useState(initialState)

  const [isModalVisible, setIsModalVisible] = useState(false);

  const addItem = () => {
    list.push({
      id: Math.random(),
      text: text,
    });

    setList(list);
    setText("");
  }

  const clearList = () => {
    setList([]);
    setIsModalVisible(false)
  }

  return (
    <View style={styles.container}>

      <Modal visible={isModalVisible}>
        <View>
          <Text>¿Estas seguro que deseas eliminar la lista?</Text>

          <Pressable onPress={() => clearList()}>
            <Text>Si</Text>
          </Pressable>

          <Pressable onPress={() => setIsModalVisible(false)}>
            <Text>No</Text>
          </Pressable>     

        </View>
      </Modal>

      <Text style={styles.titulo}>Lista de Compras</Text>

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
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Text style={styles.list}> {item.text} </Text>
        )}
        />

      <Pressable style={styles.button} onPress={() => setIsModalVisible(true)}>
        <Ionicons name="trash" size={48} color="red" />
      </Pressable> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },

  titulo: {
    marginTop: 40,
    fontSize: 30,
    borderBottomColor: "red",
    borderBottomWidth: 5,
  },
  
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

  list: {
    fontSize: 20,
    marginVertical: 2,
    color: "blue",
  }

});
