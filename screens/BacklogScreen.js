import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import MonoText from '../components/StyledText';

export default function BacklogScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Test</Text>
    </ScrollView>
  );
}

BacklogScreen.navigationOptions = {
  title: 'Backlog',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

const sprint = {'name': 'sprint name', 'tasks': [], 'aim': 'sprint aim'}
const task = {'name': 'task name', 'points': 0, 'labels': []}