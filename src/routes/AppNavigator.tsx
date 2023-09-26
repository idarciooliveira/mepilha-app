import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "../app/(auth)/welcome"
import Signin from "../app/(auth)/signin"
import Register from "../app/(auth)/register"
import NewCampaign from "../app/campaign/newCampaign"
import CampaignDetail from "../app/campaign/detail"
import Sucess from "../app/payments/sucess"
import HomeTabsNavigator from "./HomeTabsNavigator"


const Stack = createNativeStackNavigator<any>()

type Props = {
    firstLaunch: boolean
}

export default function AppNavigator({ firstLaunch }: Props) {
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

            <Stack.Screen name="home" component={HomeTabsNavigator} />
            <Stack.Screen name="signin" component={Signin} />
            <Stack.Screen name="register" component={Register} />

            <Stack.Screen name="newCampaign" component={NewCampaign} />
            <Stack.Screen name="campaignDetail" component={CampaignDetail} />
            <Stack.Screen name="payment_sucess" component={Sucess} />
        </Stack.Navigator>
    )
}