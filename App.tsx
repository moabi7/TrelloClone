import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import TaskBoard from './components/TaskBorad';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskBoard/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
