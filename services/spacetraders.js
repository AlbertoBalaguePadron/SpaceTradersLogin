import * as credentials from "../screens/credencials.json";

const endpoint = {
  userProfile: `https://api.spacetraders.io/my/account?token=${credentials.token}`,
  state: "https://api.spacetraders.io/game/status",
  CatalogShips:
  `https://api.spacetraders.io/types/ships?token=${credentials.token}`,
};

export const getUserProfile = async () => {
  try {
    const response = await fetch(endpoint.userProfile);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCatalogShips = async () => {
  try {
    const response = await fetch(endpoint.CatalogShips);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
