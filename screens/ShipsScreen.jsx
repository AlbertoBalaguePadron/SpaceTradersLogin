import { FlatList, Image, Text, View, StyleSheet } from 'react-native';
import ShipCard from "../components/shipCard";
const ShipsScreen = ({ catalogShips }) => {

  return (
    <View>
      <Image source={require('../assets/Space2.jpg')} style={styles.backgroundImage} />
      <Text style={styles.text} >Available Ships</Text>

      <FlatList
        data={catalogShips.ships}
        renderItem={({ item }) => <ShipCard ship={item} />}
        keyExtractor={(item) => item.type}
      />
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
  text: {
    paddingTop: 40,
    paddingBottom: 40,  
    textAlign: "center",
    color: "#fff",    
    fontSize: 20,

  },

});
export default ShipsScreen;