const endpoint = {
  userProfile: "https://api.spacetraders.io/my/account?token=",
  state: "https://api.spacetraders.io/game/status",
  catalogShips: "https://api.spacetraders.io/types/ships?token=",
  loans: "https://api.spacetraders.io/types/loans?token=",
  newLoans: "https://api.spacetraders.io/my/loans",
  newUser: "https://api.spacetraders.io/users/",
};

export const getUserProfile = async (token) => {
  try {
    const response = await fetch(endpoint.userProfile + token);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCatalogShips = async (token) => {
  try {
    const response = await fetch(endpoint.catalogShips + token);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getLoansData = async (token) => {
  try {
    const response = await fetch(endpoint.loans + token);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getNewLoans = async (type, pass) => {
  try {
    const resultado = await fetch(`${endpoint.newLoans}`, {
      method: "POST",
      body: JSON.stringify({
        token: pass,
        type: type,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await resultado.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const generateNewUser = async (newName) => {
  try {
    const retultado = await fetch(`${endpoint.newUser}` + `${newName}/claim`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    data = await retultado.json();
    if (data.error) {
      return null;
    }
    return data.token;
  } catch (error) {
    console.error(error);
    return {};
  }
};
