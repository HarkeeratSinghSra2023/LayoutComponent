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

  return (
    <SafeAreaView>
       <ToDoList tasks={tasks}/>
       <ToDoForm />
    </SafeAreaView>
  );
}

export default App;