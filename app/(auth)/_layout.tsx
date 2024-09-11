import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='signIn' />
            <Stack.Screen name='signUp' />
        </Stack>
    )
}