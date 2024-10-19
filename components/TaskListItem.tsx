import { View, Text, StyleSheet} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const TaskListItem = ({ task }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.description}</Text>
      <AntDesign name="close" size={16} color="gray" />
    </View>
  )
}

export default TaskListItem; 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d2125',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: 'white',
    fontSize: 16
  },
});