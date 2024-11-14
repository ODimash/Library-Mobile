import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfilePage from '../../pages/ProfilePage';

const Stack = createStackNavigator();

export default function ProfileStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={ProfilePage} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
