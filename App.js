import { useEffect, useState } from "react";
import { StyleSheet} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LogingScreen from "./screens/LogingScreen";

import { RootSiblingParent } from "react-native-root-siblings";
import * as SecureStore from "expo-secure-store";

const STORE_TOKEN_MY_KEY = "mytoken";
const Drawer = createDrawerNavigator();

const save = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

const getValueFor = async (key) => {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("Tu valor es => " + result);
    return result;
  }
  alert("No existe esa key ");
  return "";
};

export default function App() {
  const [userToken, setUserToken] = useState("");

  const storeUserToken = (newToken) => {
    save(STORE_TOKEN_MY_KEY, newToken);
    setUserToken(newToken);
  };

  useEffect(() => {
    const retriveStoreToken = async () => {
      const storedToken = await getValueFor(STORE_TOKEN_MY_KEY);
      setUserToken(storedToken);
    };

    retriveStoreToken();
  }, []);

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator>
          {userToken === "" ? (
            <>
              <Drawer.Screen name="Login Way">
                {() => <LogingScreen onLogin={storeUserToken} />}
              </Drawer.Screen>
            </>
          ) : (
            <>
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Profile" component={ProfileScreen} />
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
