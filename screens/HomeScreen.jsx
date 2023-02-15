import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { getUserProfile, getCatalogShips } from '../services/spacetraders';

const HomeScreen = ({ token }) => {


  // el perfil tiene que estar en el app y se lo paso a este

  const [profile, setProfile] = useState({
    user: {
      credits: 0,
      joinedAt: '',
      shipCount: 0,
      structureCount: 0,
      username: ''
    }
  });

  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    const fetchUserAcount = async () => {
      const userProfile = await getUserProfile(token);
      const catalogo = await getCatalogShips(token);
      setProfile(userProfile);
      setCatalog(catalogo)
    }
    fetchUserAcount();
  }, []);

  return (
    <View style={styles.container}>
      {profile.user.username == '' ? (
        <View>
          <Text>Cargando los datos</Text>
        </View>
      ) : (
        <View style={styles.containerprofile}>
          <View style={styles.profile} >
            <Image
              style={styles.imageProfile}
              source={require("../assets/capitanTitus.png")} />
            <Text style={styles.textTarget} >{profile?.user?.username}</Text>
          </View>

          <View style={styles.creditTarget}>
            <Text style={styles.textTarget}> Credits:  {profile?.user?.credits}</Text>
          </View>

          <View style={styles.target}>

            <View style={styles.contentTarget}>
              <Image
                style={styles.images}
                source={require("../assets/imperial-navy.jpg")} />
              <Text style={styles.textTarget}>{profile?.user?.shipCount}</Text>
            </View>

            <View style={styles.contentTarget}>
              <Image
                style={styles.images}
                source={require("../assets/ciudadColmena.jpg")} />
              <Text style={styles.textTarget}>{profile?.user?.structureCount}</Text>
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
    width: 50,
    height: 50,
    marginBottom: 15,
    borderRadius: 100,
    paddingRight: 50,
  },



  creditTarget: {
    flex: 1,
    backgroundColor: "#CFCFCF",
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
    backgroundColor: "#CFCFCF",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  contentTarget: {
    flexDirection: "row",
    paddingBottom: 10,
  },

  textTarget: {
    paddingLeft: 15,
  },


});

export default HomeScreen;