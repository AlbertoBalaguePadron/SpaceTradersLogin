import { useState } from 'react';
import { Text, Button, TextInput, StyleSheet, View } from 'react-native';

// para importar el toast 
import Toast from 'react-native-root-toast';
// mirar documentación OJO Echarle 1 o 2 horas 

const LogingScreen = ({ onLogin }) => {

  const [userToken, setUserToken] = useState('');

  const tokenHandler = () => {
    if (userToken !== '') {
        onLogin(userToken);
    } else {
      // Instalamos una lireria para utilizar las toast porque es multiplataforma => npm i react-native-root-toast
      Toast.show("Introduzca un Token para continuar !!!!", {
        duration: Toast.durations.LONG,
        backgroundColor: "red", 
        textColor: "white",
      });
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title} >Login</Text>
      <Text>Su token es = {userToken}</Text>
      <TextInput onChangeText={setUserToken} value={userToken} placeholder="Introduce su token" />
      <Button style={styles.text} title="Login" onPress={tokenHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    textAlign: "center",
    height: 25,
    width: 100,
    backgroundColor: "#59F16C",
  },
  title: {
    textAlign: "center",
    height: 25,
    width: 100,
  },
});

export default LogingScreen;