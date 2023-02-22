import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  getUserProfile,
  getCatalogShips,
  getNewLoans,
  getLoansData,
} from "./services/spacetraders";

//ventanas
import HomeScreen from "./screens/HomeScreen";
import ShipsScreen from "./screens/ShipsScreen";
import LogingScreen from "./screens/LogingScreen";
import Logout from "./screens/Logout";
import Loans from "./screens/Loans";

import { RootSiblingParent } from "react-native-root-siblings";
import * as SecureStore from "expo-secure-store";

const STORE_TOKEN_MY_KEY = "MyNewtoken";
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

  const [loans, setloans] = useState({
    loans: {
      amount: 0,
      collateralRequired: false,
      rate: 0,
      termInDays: 0,
      type: "",
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

  async function handleReload(type) {
    const prestamo = await getNewLoans(type, userToken.replace(/"/g, ""));
    console.log(prestamo);
  }

  const retriveStoreToken = async () => {
    const storedToken = await getValueFor(STORE_TOKEN_MY_KEY);
    setUserToken(storedToken);

    if (storedToken) {
      const userProfile = await getUserProfile(storedToken.replace(/"/g, ""));
      const catalogo = await getCatalogShips(storedToken.replace(/"/g, ""));
      const prestamo = await getLoansData(storedToken.replace(/"/g, ""));
      setProfile(userProfile);
      setCatalog(catalogo);
      setloans(prestamo);
    }
  };

  useEffect(() => {
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
                {() => <HomeScreen profileData={profile} token={userToken} />}
              </Drawer.Screen>

              <Drawer.Screen name="Ships">
                {() => <ShipsScreen catalogShips={catalog} />}
              </Drawer.Screen>
              <Drawer.Screen name="Loans">
                {() => <Loans loansData={loans.loans} onLoans={handleReload} />}
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
