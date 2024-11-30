import React, { useState } from 'react';
import { SafeAreaView, View, Button, StyleSheet } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    
      const addTask = (task) => {
        if (!tasks.includes(task)) {
          setTasks([...tasks, task])
        } else {
          console.log("Task already exists in the list");
        }
      }
    return (
        <MainLayout>
            <Button
            title="Go to About"
            onPress = {() => navigation.navigate('About')}
            />
            <View>
                <ToDoForm addTask={addTask} />
                <ToDoList tasks={tasks} />
            </View>
        </MainLayout>

    )
}