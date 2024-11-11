import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../pages/HomePage';

const StackNav = createNativeStackNavigator();

export default function HomeStackNav() {
  return (
    <StackNav.Navigator initialRouteName='HomePage'>
        <StackNav.Screen name='HomePage' component={HomePage} />
    </StackNav.Navigator>
)
}

const styles = StyleSheet.create({})
