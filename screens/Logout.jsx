import { Text, View, Button } from 'react-native';

const Logout = ({deleteStoreUserToken}) => {

  return (
    <View>
      <Text>Esta seguro de que euiere irse de esta aventura ??? </Text>
      <Button  title="Logout" onPress={() => deleteStoreUserToken()} />
    </View>
  );
}

export default Logout;