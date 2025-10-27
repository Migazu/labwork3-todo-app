import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function SecondPage() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now().toString(), text: task, done: false }]);
      setTask('');
    }
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>

      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => toggleDone(item.id)}
            onLongPress={() => deleteTask(item.id)}
          >
            <Text style={[styles.taskText, item.done && styles.doneTask]}>
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#000000ff' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  taskText: { fontSize: 16 },
  doneTask: { textDecorationLine: 'line-through', color: '#999' },
});
