import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "../app/(auth)/welcome"
import Signin from "../app/(auth)/signin"
import Register from "../app/(auth)/register"


const Stack = createNativeStackNavigator<any>()

type Props = {
    firstLaunch: boolean
}

export default function AuthNavigator({ firstLaunch }: Props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>

            {firstLaunch &&
                <>
                    <Stack.Screen name="welcome" component={Welcome} />
                </>
            }

            <Stack.Screen name="signin" component={Signin} />
            <Stack.Screen name="register" component={Register} />

        </Stack.Navigator>
    )
}