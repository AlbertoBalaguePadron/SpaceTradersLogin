import { useState } from 'react';
import { Text, Button, TextInput, Modal, StyleSheet, View } from 'react-native';
import { NewUser } from '../services/spacetraders';


// para importar el toast 
import Toast from 'react-native-root-toast';
// mirar documentación OJO Echarle 1 o 2 horas 

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

            <View style={styles.buttonsContainer}>
              <Button title="Login" onPress={tokenHandler} />
              <Button title="Close" onPress={() => {
                setModalVisibleLogin(false);
                setUserToken('');
              }} />
            </View>
          </View>
        </View>
      </Modal>

      <View >
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

  ButtonOpenModals: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10, 
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
    backgroundColor: '#fff',
    height: '40%',
    width: '70%',
  },


  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 30,
  },
  modalText: {
    textAlign: "center",
    flexWrap: 'nowrap',
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "70%",
  },
});

export default LogingScreen;