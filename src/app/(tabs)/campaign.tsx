import { StyleSheet, ScrollView } from 'react-native'
import { colors } from '../../config/colors'
import InputText from '../../components/inputs/input-text'
import CampaignCard from '../../components/campaign-card'

export default function Campaigns() {

    function handleOnPressCard() {
        // router.push(`/campaign/1092`)
    }

    return (
        <ScrollView style={styles.container}>
            <InputText placeholder='Pesquisar campanha' />

            <CampaignCard
                id={'1'}
                name='Material de estudo para Orfanato Criança Feliz'
                image={require('../../assets/onboarding01-min.jpg')}
                currentAmount={80}
                goalAmount={100}
                onPress={handleOnPressCard}
            />
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