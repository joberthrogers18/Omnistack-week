import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen() {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      flexDirection: 'column', 
      alignItems: 'center',
      backgroundColor: '#333' 
    }}>
       <Text style={{ color: '#FFF'}}>
        Home
      </Text>
      <Text style={{ color: '#FFF'}}>
        <Icon name="rocket" size={30} color="#FFF" />
      </Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#FFF'}}>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  const MyTheme = {
    dark: false,
    colors: {
      primary: '#FFF',
      background: '#333',
      card: '#AAA',
      text: '#000',
      border: '#A1A1',
    },
  };
  return (
    <NavigationContainer
      theme={MyTheme}
    >
      <Tab.Navigator
        initialRouteName="Settings"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: {
            fontSize: 12,
          },
          style: {
            backgroundColor: 'blue',
          },
        }}
      >
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon name="gear" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
