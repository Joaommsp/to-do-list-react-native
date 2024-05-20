import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import styles from "./style";

export default function Account({ navigation }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserData = () => {
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    const db = getDatabase();
    const refUsers = ref(db, "users/" + userId);
    onValue(refUsers, (snapshot) => {
      setUserName(snapshot.val().nome);
      setEmail(snapshot.val().email);
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userImageContainer}>
        <Image
          style={styles.userImage}
          source={require("../../../assets/userImage.png")}
        />
      </View>

      <View style={styles.userInfos}>
        <Text style={styles.userInfo}>Usuário: {userName}</Text>
        <Text style={styles.userInfo}>E-mail: {email}</Text>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutBtnText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
