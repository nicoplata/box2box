import { View, ActivityIndicator, Pressable, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Header from '../components/Header'
import { Entypo } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker";
import { usePutImageMutation } from "../services/ecApi";
import { useGetImageQuery } from "../services/ecApi";
import * as Location from "expo-location";

const Profile = ({ navigation }) => {
  const [putImage, result] = usePutImageMutation();

  const {data, isLoading, error, isError, refetch} = useGetImageQuery();

  const [location, setLocation] = useState(null);

  const defaultImage =
    "https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=2000";

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      await putImage({
        image: `data:image/jpeg;base64, ${result.assets[0].base64}`,
      });

      refetch();
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("No le has dado permiso a la Aplicación para acceder a tu cámara!");
      return;
    } else {
      const result = await ImagePicker.launchCameraAsync({
        base64: true,
      });

      if (!result.canceled) {
        await putImage({
          image: `data:image/jpeg;base64,${result.assets[0].base64}`,
        });
        refetch();
      }
    }
  };

  const getCoords = async () => {
    
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Permiso fue denegado");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    navigation.navigate("mapaLoc", { location });  
  };

  return (
    <View>
        <Header title="Mi Perfil"/>
        <View style={styles.containerImage}>
          { isLoading ? (
            <View 
              style={{
                flex: 1, 
                justifyContent: 'center', 
                alignContent: 'center'
              }}
            >
              <ActivityIndicator 
                style={{ flex: 1 }}
                size="large" 
                color="#0000ff" 
              />
            </View>
            ) : (
            <Image 
              style={styles.image} 
              source={{
                uri: data ? data.image : defaultImage,
              }}
            />
          )}
          <View>
            <Pressable onPress={() => openCamera()}>
                <Entypo name='camera' size={24} color="black"/>
            </Pressable>
            <Pressable onPress={() => pickImage()}>
                <FontAwesome name='photo' size={24} color="black"/>
            </Pressable>
            <Pressable onPress={() => getCoords()}>
                <FontAwesome name='map' size={24} color="black"/>
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