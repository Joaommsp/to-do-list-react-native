import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { firebase } from '../../services/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState(null)

    const login = () => {
        const auth = getAuth();

        if (email != "" && password != "") {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    if (user) {
                        navigation.navigate("Tabs")
                    }
                    // ...
                })
                .catch((error) => {
                    setErrorLogin(error.message)
                });
        }
        else if (email == "") {
            setErrorLogin("Informe seu Email")
            const timeToResetError = setInterval(() => {
                setErrorLogin(null)
                clearInterval(timeToResetError)
            }, 3000);
        }
        else if (password == "") {
            setErrorLogin("Informe sua Senha")
            const timeToResetError = setInterval(() => {
                setErrorLogin(null)
                clearInterval(timeToResetError)
            }, 3000);
        }
        else {
            setErrorLogin("Preencha todos os campos")

            const timeToResetError = setInterval(() => {
                setErrorLogin(null)
                clearInterval(timeToResetError)
            }, 3000);
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logo_pra_fazer.png')} />

            <View style={styles.alertContainer}>
                {errorLogin != null && (
                    <Text style={styles.alert}>{errorLogin}</Text>
                )}
            </View>

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                secureTextEntry={true}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonCreate}
                onPress={() => navigation.navigate('CreateUser')}
            >
                <Text style={styles.buttonCreateText}>Criar Usuário</Text>
            </TouchableOpacity>
        </View>
    )
}