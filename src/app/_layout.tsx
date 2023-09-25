import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "../config/colors";


export default function Layout() {
    return (
        <>
            <StatusBar backgroundColor={colors.background} />
            <Stack screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="welcome/index" options={{
                    headerShown: false
                }} />
                <Stack.Screen name="auth/register" options={{
                    headerShown: false
                }} />
                <Stack.Screen name="auth/signin" options={{
                    headerShown: false
                }} />
            </Stack>
        </>
    )
}