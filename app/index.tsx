import { View, StyleSheet } from 'react-native';
import TaskBoard from '../components/TaskBorad';
import { Stack } from 'expo-router';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: 'Project Board'}}/>
            <TaskBoard/>
        </View>
      );
}

export default HomePage;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
  });