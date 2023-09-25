
import { ScrollView, StyleSheet } from 'react-native'
import { colors } from '../../config/colors'
import CampaignCard from '../../components/campaign-card'
import CampaignOverviewCard from '../../components/campaign-overview-card'
import { FloatingAction, IActionProps } from "react-native-floating-action";
import MaterialIcon from '@expo/vector-icons/MaterialIcons'
import { router } from 'expo-router';

const actions: IActionProps[] = [
    {
        text: "Nova Campanha",
        name: "new_campaign",
        icon: <MaterialIcon name='add' size={32} color={'white'} />,
    },
]

export default function Dashboard() {

    function handleOnNewCampaign() {
        router.push('/campaign/newCampaign')
    }
    function handleOnPressCard() {
        router.push(`/campaign/1092`)
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <CampaignOverviewCard />
                <CampaignCard
                    id={'1'}
                    name='Material de estudo para Orfanato Criança Feliz'
                    image={require('../../assets/onboarding01-min.jpg')}
                    currentAmount={80}
                    goalAmount={100}
                    onPress={handleOnPressCard}
                />
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