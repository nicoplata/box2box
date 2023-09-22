import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Header from './Header'

const Profile = () => {
  return (
    <View>
        <Header title="Mi Perfil"/>
        <View style={{ alignItems: "center", marginTop: 15 }}>
            <Image style={styles.image} />
        </View>
        <View>
        <Pressable>
            <Entypo  />
        </Pressable>
        </View>
        
      {/* <Text>Profile</Text> */}
    </View>
  )
}

export default Profile