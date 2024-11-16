import { useObject, useRealm } from '@realm/react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, TextInput } from 'react-native';
import { BSON } from 'realm';
import { Task } from '../models/Task';
import { useState } from 'react';

const TaskDetails = () => {
    const { id } = useLocalSearchParams();
    const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

    const [ updatedDescription, setUpdatedDescription ] = useState(task?.description);

    const realm = useRealm();

    const updateDescription = () => {
      if (!task) {
        return;
      }

      realm.write(() => {
        task.description = updatedDescription || '';
      });
    }

    if (!task) {
      return <Text>Not Found</Text>
    }

    return (
      <View style={{padding: 10}}>
          <Stack.Screen options={{title: 'Task Details'}}/>
          <TextInput value={updatedDescription}
            onChangeText={setUpdatedDescription}
            onEndEditing={() => updateDescription()}
            style={{color: 'white', fontSize: 20 }}
          />
      </View>
    )
}

export default TaskDetails; 