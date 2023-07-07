import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View 
      style={styles.container}>
      <Image 
      style={{ width: 200, height: 200}}
      source={{ 
      uri: 'https://wallpapercave.com/wp/wp4867505.jpg'
      }}
      />
      <Text style={styles.title}> Dillon Crawford</Text>
      <Text style={styles.paragraph}>I am a 15 year old kid who has found a passion for code, in my freetime I would play video games or look up tutorials on how to code, I currently go to Torrence high and my goals are to go to a out of state college and work for as gaming companing such as riot games </Text>
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
  title: {
    fontSize: 25,
  }
});
