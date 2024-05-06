import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { firebase } from '../../services/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CreateUser({ navigation }) {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorCreateUser, setErrorCreateUser] = useState(null)

    const validate = () => {
        if (userName == "") {
            setErrorCreateUser("Informe seu nome");
        }
        else if (email == "") {
            setErrorCreateUser("Informa seu e-mail")
        }
        else if (password == "") {
            setErrorCreateUser("Informa uma senha")
        }
        else {
            setErrorCreateUser(null)
        }
    }

    const createUser = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)

                if (user) {
                    navigation.navigate("Tabs")
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                setErrorCreateUser(errorMessage)
            });
    }

    return (
        <View style={styles.container}>
            {errorCreateUser != null && (
                <Text style={styles.alert}>{errorCreateUser}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder='Nome'
                value={userName}
                onChangeText={setUserName}
            />

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={validate}
            >
                <Text style={styles.textButton} onPress={() => createUser()}>Criar usuário</Text>
            </TouchableOpacity>
        </View>
    )
}