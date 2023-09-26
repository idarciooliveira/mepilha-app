import { StyleSheet, ScrollView, Text } from 'react-native'
import { colors } from '../../config/colors'
import InputText from '../../components/inputs/input-text'
import CampaignCard from '../../components/campaign-card'
import campaign from '../../services/campaign'
import ActivityIndicator from '../../components/activity-indicator'
import React from 'react'

export default function Campaigns({ navigation }: any) {

    const { campaigns, isLoading, error } = campaign.getCampaigns()

    const [query, setQuery] = React.useState('')

    const result = query.length > 3 ? campaigns?.
        filter(camp =>
            camp.title.toLocaleUpperCase().includes(query.toUpperCase()) ||
            camp.description.toLocaleUpperCase().includes(query.toLocaleUpperCase())
        ) : campaigns


    if (error) return (<Text>Ocoreu um erro de internet</Text>)

    return (
        <ScrollView style={styles.container}>
            <ActivityIndicator visible={isLoading} />
            <InputText
                value={query}
                onChangeText={(text) => setQuery(text)}
                placeholder='Pesquisar campanha'
            />

            {result && result.length > 0 && result.map(campaign => (
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
        paddingVertical: 8
    }
})