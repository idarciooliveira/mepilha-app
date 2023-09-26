
import { ScrollView, StyleSheet, Text } from 'react-native'
import { colors } from '../../config/colors'
import CampaignCard from '../../components/campaign-card'
import CampaignOverviewCard from '../../components/campaign-overview-card'
import { FloatingAction, IActionProps } from "react-native-floating-action";
import MaterialIcon from '@expo/vector-icons/MaterialIcons'
import campaign from '../../services/campaign';
import { useAuth } from '../../hooks/useAuth';
import ActivityIndicator from '../../components/activity-indicator';

const actions: IActionProps[] = [
    {
        text: "Nova Campanha",
        name: "new_campaign",
        icon: <MaterialIcon name='add' size={32} color={'white'} />,
    },
]

export default function Dashboard({ navigation }: any) {

    const { user } = useAuth()

    const { campaigns, isLoading, error } = campaign.getUserCampaigns(user?.id ?? '')

    if (error) return (<Text>Ocoreu um erro de internet</Text>)

    function handleOnNewCampaign() {
        navigation.navigate('newCampaign')
    }


    return (
        <>
            <ScrollView style={styles.container}>
                <CampaignOverviewCard />
                <ActivityIndicator visible={isLoading} />
                {campaigns && campaigns.length > 0 && campaigns.map(campaign => (
                    <CampaignCard
                        key={campaign.id}
                        id={campaign.id}
                        name={campaign.title}
                        image={{ uri: campaign.cover_image }}
                        currentAmount={campaign.amountReceived}
                        goalAmount={campaign.goalAmount}
                        onPress={() => navigation.navigate(`campaignDetail`, {
                            id: campaign.id
                        })}
                    />
                ))}
            </ScrollView>
            <FloatingAction
                color={colors.primary}
                overrideWithAction={true}
                actions={actions}
                onPressItem={handleOnNewCampaign}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        paddingVertical: 8
    }
})