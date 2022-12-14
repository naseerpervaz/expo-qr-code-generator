import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <QRCode value='https://www.gohoopo.com/' /> */}
      <QRCode value='https://www.gohoopo.com/flood-relief' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
