import { Text, StyleSheet, View, Image } from 'react-native';

const HomeScreen = ({ profileData, token }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Space2.jpg')} style={styles.backgroundImage} />

      {profileData.user.username == '' ? (
        <View>
          <Text style={{ color: 'white', size: 15 }}>Cargando los datos</Text>
        </View>
      ) : (
        <View style={styles.containerprofile}>
          <Text style={styles.textToken}> Este es su token : {token}</Text>

          <View style={styles.profile} >
            <Image
              style={styles.imageProfile}
              source={require("../assets/capitanTitus.png")} />
            <Text style={styles.textUsername} >{profileData.user.username}</Text>
          </View>

          <View style={styles.creditTarget}>
            <Text style={styles.textTarget}>Credits:</Text>
            <Text style={styles.textTarget}>{profileData.user.credits}</Text>
          </View>

          <View style={styles.target}>

            <View style={styles.contentTarget}>
              <Image
                style={styles.images}
                source={require("../assets/imperial-navy.jpg")} />
              <Text style={styles.textTarget}>Ships : {profileData.user.shipCount}</Text>
            </View>

            <View style={styles.contentTarget}>
              <Image
                style={styles.images}
                source={require("../assets/ciudadColmena.jpg")} />
              <Text style={styles.textTarget}> Estructure : {profileData.user.structureCount}</Text>
            </View>
          </View>

        </View>
      )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  containerprofile: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: "80%",
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  imageProfile: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
    paddingRight: 50,
  },
  images: {
    width: 70,
    height: 70,
    borderRadius: 80,
    paddingLeft: 50,
  },
  creditTarget: {
    flex: 1,
    color: "white",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 20,
  },
  target: {
    flex: 2,
    width: 250,
    marginTop: 10,
    flexDirection: "column",
    color: "white",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  contentTarget: {
    flexDirection: "row",
  },

  textTarget: {
    textAlign: "center",
    color: "white",
    paddingLeft: 20,
  },

  textUsername: {
    textAlign: "center",
    color: "black",
    paddingLeft: 20,
  },

  textToken: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    marginTop: -25,
  },

});

export default HomeScreen;