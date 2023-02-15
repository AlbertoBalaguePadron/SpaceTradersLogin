import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getCatalogShips } from '../services/spacetraders';

const ShipsScreen = ({ token }) => {

  const [catalog, setCatalog] = useState([]);



  useEffect(() => {
    const fetchCatalogShips = async () => {
      const catalogo = await getCatalogShips(token);
      setCatalog(catalogo.ships)
    }
    fetchCatalogShips();
  }, []);


  return (
    <View>
      <Text>HOLITASr</Text>
    </View>
  );
}

export default ShipsScreen;