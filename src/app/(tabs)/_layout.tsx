
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { colors } from '../../config/colors'

export default function AppLayout() {
    return (
        <Tabs screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName = 'home'

                if (route.name === 'home') {
                    iconName = 'home'
                }
                else if (route.name === 'dashboard') {
                    iconName = 'dashboard'
                }
                else if (route.name === 'campaign') {
                    iconName = 'campaign'
                }
                else if (route.name === 'settings') {
                    iconName = 'settings'
                }
                // @ts-ignore
                return <MaterialIcons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: colors.primary,
            tabBarItemStyle: {
                backgroundColor: '#F3F4F9'
            }
        })}>
            <Tabs.Screen
                name='home'
                options={{
                    headerTitle: 'Pagina Inicial',
                }}
            />
            <Tabs.Screen
                name='dashboard'
                options={{
                    headerTitle: 'Minhas Campanhas',
                }}
            />
            <Tabs.Screen
                name='campaign'
                options={{
                    headerTitle: 'Campanhas',
                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    headerTitle: 'Definições',
                }}
            />
        </Tabs>
    )
}