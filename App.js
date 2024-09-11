import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import { View, StyleSheet, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Store from './State/Store.js';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/auth/Login.js';
import JobScreen from './Screens/JobScreen.js';
import HistoryScreen from './Screens/HistoryScreen.js';
import ReportScreen from './Screens/ReportScreen.js';
import BottomNavBar from './Components/BottomNavbar';
import ViewJobScreen from './Screens/job/ViewJobScreen';
import {name as appName} from './app.json'

const Stack = createStackNavigator();
const RootStack = createStackNavigator(); 

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        gestureEnabled: false,
        ...getCustomAnimation(route, navigation),
      })}
      initialRouteName='History'
    >
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerLeft: null }} name="Home" component={HomeScreen} />
      <Stack.Screen options={{ headerLeft: null }} name="Job" component={JobScreen} />
      <Stack.Screen options={{ headerLeft: null }} name="History" component={HistoryScreen} />
      <Stack.Screen options={{ headerLeft: null }} name="Report" component={ReportScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='MainStack'>
          <RootStack.Screen options={{ headerShown: false }} name="MainStack" component={MainStackWithBottomNav} />
          <RootStack.Screen options={{ headerShown: true }} name="View Job" component={ViewJobScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function MainStackWithBottomNav() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <MainStack />
      </View>
      {/* Always show BottomNavBar here */}
      <BottomNavBar />
    </View>
  );
}

function getCustomAnimation(route, navigation) {
  const { index, routes } = navigation.getState();
  const currentRouteName = routes[index].name;

  if (
    (currentRouteName === 'Home' && route.name === 'Jobs') ||
    (currentRouteName === 'History' && route.name === 'Jobs') ||
    (currentRouteName === 'Report' && route.name === 'History')
  ) {
    return {
      transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }; // Slide left
  } else if (
    (currentRouteName === 'Jobs' && route.name === 'Home') ||
    (currentRouteName === 'Jobs' && route.name === 'History') ||
    (currentRouteName === 'History' && route.name === 'Report')
  ) {
    return {
      transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }; // Slide right
  } else {
    return {
      transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }; // Default to horizontal slide
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
});

export default App;
