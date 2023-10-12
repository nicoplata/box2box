import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Pressable, 
    StyleSheet 
    } from 'react-native'
import React, { useState } from 'react'
import { colors } from "../theme/colors"
import { firebase_auth } from '../firebase/firebase_auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const response = await createUserWithEmailAndPassword(
                firebase_auth, 
                email, 
                password
            );
            console.log(response);
            navigation.navigate('login')
        } catch (e) {
            console.log('Error en registro...', e)
        }
    };

    return (
        <View style={styles.container}>
            <Text Text style={styles.title}>Inicio de Sesión</Text>
            <TextInput 
                placeholder='Email'
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput 
                placeholder='Contraseña'
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <Pressable onPress={() => navigation.navigate('login')}>
                <Text style={styles.registroText}>Ya tenes cuenta? Iniciar Sesión</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBotton: 20,
    },
    input: {
        width: "85%",
        height: 50,
        borderColor: colors.pink,
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 17,
    },
    button: {
        backgroundColor: colors.pink,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
    },
    registroText: {
        marginTop: 30,
        fontSize: 10,
        color: colors.heavyBlue,
    },
});

export default Register

