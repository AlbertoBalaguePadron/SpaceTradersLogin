import { useState } from 'react';
import { Text, Image, Button, TextInput, Modal, StyleSheet, View } from 'react-native';
import Toast from 'react-native-root-toast';

const LogingScreen = ({ onLogin }) => {

  const [userToken, setUserToken] = useState('');
  const [userName, setUserName] = useState('');
  const [modalVisibleLogin, setModalVisibleLogin] = useState(false);
  const [modalVisibleRegister, setModalVisibleRegister] = useState(false);

  const tokenHandler = () => {
    if (userToken !== '') {
      onLogin(userToken);
      setModalVisibleLogin(false)
    } else {
      Toast.show("Introduzca un Token para continuar !!!!", {
        duration: Toast.durations.LONG,
        backgroundColor: "red",
        textColor: "white",
      });
    }
  }

  const userNameHandler = () => {
    if (userName !== '') {

      const NewUser = 7;

      setModalVisibleRegister(false)
    } else {
      Toast.show("Introduzca un Nick para continuar !!!!", {
        duration: Toast.durations.LONG,
        backgroundColor: "red",
        textColor: "white",
      });
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Space2.jpg')} style={styles.backgroundImage} />

      <View style={styles.logoContainer}>
        <Image source={require('../assets/spaceTraders.jpg')} style={styles.logoImage} />
      </View >



      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleRegister}
        onRequestClose={() => setModalVisibleRegister(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText} >Introduce su Nick : </Text>
            <TextInput style={styles.modalText} onChangeText={setUserName} value={userName} placeholder=" Introduce su username" />
            <View style={styles.buttonsContainer}>
              <Button title="Register" onPress={userNameHandler} />
              <Button title="Close" onPress={() => {
                setModalVisibleRegister(false);
                setUserName('');
              }} />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleLogin}
        onRequestClose={() => setModalVisibleLogin(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText} >Introduce su Token: </Text>
            <TextInput style={styles.modalText} onChangeText={setUserToken} value={userToken} placeholder=" Introduce su token" />

            <View style={styles.ModalbuttonsContainer}>
              <Button title="Login" onPress={tokenHandler} />
              <Button title="Close" onPress={() => {
                setModalVisibleLogin(false);
                setUserToken('');
              }} />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.buttonsContainer}>
        <Button style={styles.ButtonOpenModals} title="Login" onPress={() => setModalVisibleLogin(true)} />
        <Button style={styles.ButtonOpenModals} title="Registrer" onPress={() => setModalVisibleRegister(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  logoImage: {
    borderRadius: 80,
    width: 150,
    height: 100,
  },
  buttonsContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "50%",

  },

  ButtonOpenModals: {
    alignItems: "center",
    justifyContent: "center",
  },

  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255, 255, 255)',
    backgroundColor: '#F39C12',
    height: '40%',
    width: '80%',
  },

  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 30,
  },
  modalText: {
    color: "#FFFF",
    textAlign: "center",
    flexWrap: 'nowrap',
  },
  ModalbuttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "70%",
  },
});

export default LogingScreen;