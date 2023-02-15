import { Image, Text, View, Button, StyleSheet } from 'react-native';

const Logout = ({ deleteStoreUserToken }) => {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/spaceLogout.jpg')} style={styles.backgroundImage} />

      <Text style={styles.text} >¿ Esta seguro de que abandonar esta aventura ? </Text>
      <Button title="Logout" onPress={() => deleteStoreUserToken()} />

    </View>
  );
}

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
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
  },

});

export default Logout;