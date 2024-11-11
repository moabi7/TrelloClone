import { Pressable, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import { Task } from '../models/Task';
import { useRealm } from '@realm/react';

const TaskListItem = ({ task }: { task: Task }) => {
  const realm = useRealm();
  const deleteTask = () => {
    realm.write(() => {
      realm.delete(task);
    });
  }
  return (
    <Link href={`/${task._id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>
        <AntDesign onPress={deleteTask} name="close" size={16} color="gray" />
      </Pressable>
    </Link>
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