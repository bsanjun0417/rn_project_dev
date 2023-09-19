import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';



export default function App() {


  return (
    <View style={styles.container}>
            <WebView
          style={styles.webview}
          source={{ uri: 'https://m.naver.com/?mobile' }} />
    

      <StatusBar style="auto" />
    </View>
  );
}
const { width, height } = Dimensions.get('window');
console.log(width,height)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webview:{
    flex:1,
    width:width,
    height:height,

  }
});
