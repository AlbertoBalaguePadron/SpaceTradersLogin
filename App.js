import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { getUserProfile, getCatalogShips } from "./services/spacetraders";

//ventanas
import HomeScreen from "./screens/HomeScreen";
import ShipsScreen from "./screens/ShipsScreen";
import LogingScreen from "./screens/LogingScreen";
import Logout from "./screens/Logout";

import { RootSiblingParent } from "react-native-root-siblings";
import * as SecureStore from "expo-secure-store";

const STORE_TOKEN_MY_KEY = "Mytoken";
const Drawer = createDrawerNavigator();

const saveInMemory = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

const deleteFromMemory = async (key) => {
  await SecureStore.deleteItemAsync(key);
};

const getValueFor = async (key) => {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  }
  return "";
};

/*

ESTA ES EL APP ?????????????????????


*/

export default function App() {
  const [catalog, setCatalog] = useState([]);
  const [profile, setProfile] = useState({
    user: {
      credits: 0,
      joinedAt: "",
      shipCount: 0,
      structureCount: 0,
      username: "",
    },
  });

  const [userToken, setUserToken] = useState("");

  const storeUserToken = (newToken) => {
    saveInMemory(STORE_TOKEN_MY_KEY, newToken);
    setUserToken(newToken);
  };

  const deleteStoreUserToken = () => {
    deleteFromMemory(STORE_TOKEN_MY_KEY);
    setUserToken("");
  };

  useEffect(() => {
    const retriveStoreToken = async () => {
      const storedToken = await getValueFor(STORE_TOKEN_MY_KEY);
      setUserToken(storedToken);

      if (storedToken) {
        const userProfile = await getUserProfile(storedToken);
        const catalogo = await getCatalogShips(storedToken);
        setProfile(userProfile);
        setCatalog(catalogo);
      }
    };
    retriveStoreToken();
  }, []);

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator>
          {userToken === "" ? (
            <>
              <Drawer.Screen name="Login">
                {() => <LogingScreen onLogin={storeUserToken} />}
              </Drawer.Screen>
            </>
          ) : (
            <>
              <Drawer.Screen name="Home">
                {() => <HomeScreen profileData={profile} />}
              </Drawer.Screen>
              <Drawer.Screen name="Ships">
                {() => <ShipsScreen catalogShips={catalog} />}
              </Drawer.Screen>
              <Drawer.Screen name="Logout">
                {() => <Logout deleteStoreUserToken={deleteStoreUserToken} />}
              </Drawer.Screen>
            </>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
