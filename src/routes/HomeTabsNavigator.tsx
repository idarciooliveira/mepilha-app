import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../config/colors'
import Home from '../app/(tabs)/home'
import Dashboard from '../app/(tabs)/dashboard'
import Campaigns from '../app/(tabs)/campaign'
import Settings from '../app/(tabs)/settings'

const Tabs = createBottomTabNavigator<any>()

export default function HomeTabsNavigator() {
    return (
        <Tabs.Navigator
            initialRouteName='home'
            screenOptions={({ route }) => ({
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
                component={Home}
                options={{
                    headerTitle: 'Pagina Inicial',
                }}
            />
            <Tabs.Screen
                name='dashboard'
                component={Dashboard}
                options={{
                    headerTitle: 'Minhas Campanhas',
                }}
            />
            <Tabs.Screen
                name='campaign'
                component={Campaigns}
                options={{
                    headerTitle: 'Campanhas',
                }}
            />
            <Tabs.Screen
                name='settings'
                component={Settings}
                options={{
                    headerTitle: 'Definições',
                }}
            />
        </Tabs.Navigator>
    )
}