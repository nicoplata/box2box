import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Entypo } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"

const Profile = () => {
  return (
    <View>
        <Header title="Mi Perfil"/>
        <View style={styles.containerImage}>
            <Image 
              style={styles.image} 
              source={{
                uri: "https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg"
              }}
            />
            <View>
              <Pressable onPress={() => console.log("abrir camara...")}>
                  <Entypo name='camera' size={24} color="black"/>
              </Pressable>
              <Pressable onPress={() => console.log("abrir galeria...")}>
                  <FontAwesome name='photo' size={24} color="black"/>
              </Pressable>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 350,
  },
  containerImage: {
    alignItems: "center",
    marginTop: 15,
  },
})

export default Profile