
import { ScrollView, StyleSheet } from 'react-native'
import { colors } from '../../config/colors'
import CampaignCard from '../../components/campaign-card'

export default function Home() {
    return (
        <ScrollView style={styles.container}>

            <CampaignCard
                id={'1'}
                name='Material de estudo para Orfanato Criança Feliz'
                image={require('../../assets/onboarding01-min.jpg')}
                currentAmount={80}
                goalAmount={100}
                onPress={() => { }}
            />

            <CampaignCard
                id={'2'}
                name='Barbearia O Broto'
                image={require('../../assets/onboarding02-min.jpg')}
                currentAmount={80}
                goalAmount={100}
                onPress={() => { }}
            />

            <CampaignCard
                id={'3'}
                name='Sopa solidaria Quilengues'
                image={require('../../assets/onboarding03-min.jpg')}
                currentAmount={80}
                goalAmount={100}
                onPress={() => { }}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        paddingHorizontal: 20,
    }
})