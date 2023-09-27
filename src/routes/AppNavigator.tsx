import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NewCampaign from "../app/campaign/newCampaign"
import CampaignDetail from "../app/campaign/detail"
import Sucess from "../app/payments/sucess"
import HomeTabsNavigator from "./HomeTabsNavigator"


const Stack = createNativeStackNavigator<any>()

export default function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="hometabs"
            screenOptions={{
                headerShown: false,
            }}>

            <Stack.Screen name="hometabs" component={HomeTabsNavigator} />
            <Stack.Screen name="newCampaign" component={NewCampaign} />
            <Stack.Screen name="campaignDetail" component={CampaignDetail} />
            <Stack.Screen name="payment_sucess" component={Sucess} />
        </Stack.Navigator>
    )
}