import { StyleSheet } from 'react-native';

import ChatHouse from '../components/ChatHouse';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ChatHouseScreen({ navigation }: RootTabScreenProps<'ChatHouse'>) {
  return (
    <View style={styles.container}>
      <ChatHouse />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
