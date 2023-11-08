
import { ImageBackground , StyleSheet, View } from 'react-native';
import Welcomescreen from './screens/Welcomescreen';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Welcomescreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
