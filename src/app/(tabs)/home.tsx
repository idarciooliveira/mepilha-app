
import { ScrollView, StyleSheet, Text } from 'react-native'
import { colors } from '../../config/colors'
import CampaignCard from '../../components/campaign-card'
import campaign from '../../services/campaign'
import ActivityIndicator from '../../components/activity-indicator'

export default function Home({ navigation }: any) {

    const { campaigns, isLoading, error } = campaign.getCampaigns()

    if (error) return (<Text>Ocoreu um erro de internet</Text>)

    return (
        <ScrollView style={styles.container}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        paddingHorizontal: 20,
    }
})