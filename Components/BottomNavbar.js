import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigationState, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Change to your preferred icon set

const BottomNavBar = () => {
  const navigation = useNavigation();
  const navigationState = useNavigationState((state) => state);
  
  // Set default route value if navigationState is undefined
  let currentRoute = navigationState ? navigationState.routes[navigationState.index]?.name : 'Home';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      >
        <Icon
          name="home"
          size={24}
          color={currentRoute === 'Home' ? '#002667' : '#b0b0b0'} // Change color based on active state
        />
        <Text style={[styles.navText, { color: currentRoute === 'Home' ? '#002667' : '#b0b0b0' }]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Jobs')}
        style={styles.button}
      >
        <Icon
          name="work"
          size={24}
          color={currentRoute === 'Jobs' ? '#002667' : '#b0b0b0'}
        />
        <Text style={[styles.navText, { color: currentRoute === 'Jobs' ? '#002667' : '#b0b0b0' }]}>Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('History')}
        style={styles.button}
      >
        <Icon
          name="history"
          size={24}
          color={currentRoute === 'History' ? '#002667' : '#b0b0b0'}
        />
        <Text style={[styles.navText, { color: currentRoute === 'History' ? '#002667' : '#b0b0b0' }]}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Report')}
        style={styles.button}
      >
        <Icon
          name="report"
          size={24}
          color={currentRoute === 'Report' ? '#002667' : '#b0b0b0'}
        />
        <Text style={[styles.navText, { color: currentRoute === 'Report' ? '#002667' : '#b0b0b0' }]}>Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default BottomNavBar;
