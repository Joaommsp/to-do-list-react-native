import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import styles from './style';;

export default function Account({ navigation }) {

  const logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigation.navigate("Login")
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.userImageContainer}>
        <Image style={styles.userImage} source={require('../../../assets/userImage.png')} />
      </View>

      <Text>Nome</Text>
      <Text>E-mail</Text>

      <TouchableOpacity onPress={logout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}