const endpoint = {
  userProfile: "https://api.spacetraders.io/my/account?token=",
  state: "https://api.spacetraders.io/game/status",
  catalogShips: "https://api.spacetraders.io/types/ships?token=",
};

export const getUserProfile = async (token) => {
  try {
    const response = await fetch(
      endpoint.userProfile + token.replace(/"/g, "")
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCatalogShips = async (token) => {
  try {
    const response = await fetch(
      endpoint.catalogShips + token.replace(/"/g, "")
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// necesito mirar bien el como hacer esta consulta post por fetch preguntar porfe OJO !!!!!!
// export const NewUser = async (nick) => {
//   try {
//     const newuser = `https://api.spacetraders.io/users/${nick}/claim`;
//     const data = await fetch(newuser);
//     return data;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };
