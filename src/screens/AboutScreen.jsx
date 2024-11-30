import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
        <View style={styles.container}>
        <Text style={styles.title}>App Name: Incredible ToDoList App</Text>
        <Text style={styles.subtitle}>Developed by: Harkeerat Singh Sra</Text>
        <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
        </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    color: '#555',
  },
  date: {
    fontSize: 16,
    color: '#777',
  },
});

export default AboutScreen;
