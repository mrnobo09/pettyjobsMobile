import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const statusColors = {
  waiting: '#b0b0b0',  // Grey
  rejected: '#9b0000', // Red
  inProgress: '#2b3970', // Blue
  completed: '#00934c', // Green
};

export default function Job({ title, description, image, status }) {
  const statusColor = statusColors[status] || '#b0b0b0'; // Default to grey if status is unknown
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={[styles.statusContainer, { backgroundColor: statusColor }]}>
        <Text style={styles.statusText}>{status.charAt(0).toUpperCase() + status.slice(1)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative', // Ensure status pill positioning works
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 2,
    marginRight: 80, // Space for status pill
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
    flexShrink: 1, // Allow text to wrap and not overflow
  },
  statusContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    minWidth: 100, // Fixed width for status pill
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
