/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';


function App() {
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
    <SafeAreaView>
       <ToDoList tasks={tasks}/>
       <ToDoForm addTask={addTask}/>
    </SafeAreaView>
  );
}

export default App;