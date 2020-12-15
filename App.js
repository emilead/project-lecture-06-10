import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import CameraScreen from './components/CameraScreen';
import HomeScreen from './components/HomeScreen';
import ImagePickerExample from './components/ImagePicker';
import ProfilePageScreen from './components/ProfilePageScreen';
import MapRoutesScreen from './components/MapRoutesScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import NewPassword from './components/NewPassword';
import WeatherScreen from './components/WeatherScreen';
import { Platform } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen
          name="LogIn"
          component={LoginScreen}
          options={{
            headerShown: true,
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-log-in'}
            ></Icon>
          }}
        />
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-home'}
            ></Icon>
          }}
        />
        <Drawer.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: true,
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-log-in'}
            ></Icon>
          }}
        />
        <Drawer.Screen
          name="Forgot Password"
          component={NewPassword}
          options={{
            headerShown: true,
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-help'}
            ></Icon>
          }}
        />

        <Drawer.Screen
          name="ProfilePage"
          component={ProfilePageScreen}
          options={{
            headerShown: true,
            title: "Profile page",
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-happy'}
            ></Icon>
          }}

        />

        <Drawer.Screen
          name="MapRoutes"
          component={MapRoutesScreen}
          options={{
            headerShown: true,
            title: "Find suggested routes",
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-image'}
            ></Icon>
          }}
        />
        <Drawer.Screen
          name="Weather"
          component={WeatherScreen}
          options={{
            headerShown: true,
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-cloud'}
            ></Icon>
          }}
        />
        <Drawer.Screen
          name="Camera"
          component={ImagePickerExample}
          options={{
            headerShown: true,
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-camera'}
            ></Icon>
          }}
        />

        <Drawer.Screen
          name="Camera2"
          component={CameraScreen}
          options={{
            headerShown: true,
            drawerIcon: config => <Icon
              size={40}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-camera'}
            ></Icon>
          }}
        />



      </Drawer.Navigator>
    </NavigationContainer>
  );
}
