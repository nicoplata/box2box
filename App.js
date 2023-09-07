import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddItem from './src/AddItem';
import ListItem from './src/ListItem';
import CustomModal from './src/CustomModal';

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

      <CustomModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} clearList={clearList} />

      <Text style={styles.titulo}>Lista de Compras</Text>

      <AddItem text={text} setText={setText} addItem={addItem} />

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ListItem item={item} />}
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
});
