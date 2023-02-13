import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { getUserProfile, getCatalogShips } from '../services/spacetraders';

const HomeScreen = () => {

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
      const userProfile = await getUserProfile();
      const catalogo = await getCatalogShips();
      setProfile(userProfile);
      setCatalog(catalogo)
    }
    fetchUserAcount();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {profile.user.username == '' ? (

          <View>
            <Text>Cargando los datos</Text>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.profile} >
              <Image
                style={styles.imageProfile}
                source={require("../assets/capitanTitus.png")} />
              <Text>{profile?.user?.username}</Text>
            </View>
            <View style={styles.target}>
              <Text>Credits:  {profile?.user?.credits}</Text>
              <Text>Estructures: {profile?.user?.structureCount}</Text>
            </View>
          </View>
        )
        }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageProfile: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 100,
    paddingRight: 10,
  },
  target: {
    flex: 1,
    width: 200,
    height: 200, 
    flexDirection: "column",
    backgroundColor: "#CFCFCF",
  }

});

export default HomeScreen;