import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import TaskListItem from './TaskListItem';
import { useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        {description: 'First Task'},
        {description: 'Second Task'},
        {description: 'Third Task'},
        {description: 'Fourth Task'}
    ]);
    const [newTask, setNewTask] = useState('');

    const createTask = () => {
        // console.warn('Create', newTask);
        setTasks([...tasks, {description: newTask}]);
        setNewTask('');
    };

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Todo</Text>
        <FlatList 
            data={tasks} 
            contentContainerStyle={{gap: 5}}
            renderItem={({item}) => <TaskListItem task={item}/>}
        />

        <TextInput 
            placeholder='New task'
            placeholderTextColor='gray'
            value={newTask}
            onChangeText={setNewTask}
            style={styles.input}
        />

        <Button title='Add task' onPress={createTask}/>
    </View>
    )
}

export default TaskList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#101112', 
        padding: 10, 
        borderRadius: 5, 
        gap: 5 
    },
    title: { 
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginVertical: 10 
    },
    input: {
        color: 'white',
        padding: 10,
        backgroundColor: '#1d2125',
        borderRadius: 5
    }
});