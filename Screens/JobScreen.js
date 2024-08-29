import React from 'react';
import { View, StyleSheet } from 'react-native';
import Job from '../Components/Job';
import favicon from '../assets/favicon.png'; // Ensure this path is correct
import { ScrollView } from 'react-native-gesture-handler';

export default function JobScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Job 
          title="Hello" 
          description="asdasdsadasdasdasda" 
          image={favicon} 
          status="waiting" 
        />
        <Job 
          title="Hello" 
          description="asdasdsadasdasdasda" 
          image={favicon} 
          status="completed" 
        />
        <Job 
          title="Hello" 
          description="asdasdsadasdasdasda" 
          image={favicon} 
          status="waiting" 
        />
        <Job 
          title="Hello" 
          description="asdasdsadasdasdasda" 
          image={favicon} 
          status="rejected" 
        />
        <Job 
          title="Hello" 
          description="asdasdsadasdasdasda" 
          image={favicon} 
          status="completed" 
        />
        <Job 
          title="Hello" 
          description="asdasdsadasdasdasda" 
          image={favicon} 
          status="inProgress" 
        />
        <Job 
          title="Hello" 
          description="asdasdsadasdasdasda" 
          image={favicon} 
          status="waiting" 
        />
        <Job 
          title="Hello" 
          description="asdasdsadasdasdasda" 
          image={favicon} 
          status="waiting" 
        />
        <Job 
          title="Hello" 
          description="asdasdsadasdasdasda" 
          image={favicon} 
          status="waiting" 
        />
        <Job 
          title="Hello" 
          description="asdasdsadasdasdasda" 
          image={favicon} 
          status="waiting" 
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
    padding: 10,
  },
});
