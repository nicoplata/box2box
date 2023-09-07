import { View, Text, Modal, Pressable } from 'react-native'
import React from 'react'

const CustomModal = ({ setIsModalVisible, isModalVisible, clearList }) => {
  return (
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
  )
}

export default CustomModal