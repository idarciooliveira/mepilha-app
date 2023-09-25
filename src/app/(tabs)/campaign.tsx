import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { colors } from '../../config/colors'
import InputText from '../../components/inputs/inputText'

export default function Campaigns() {
    return (
        <ScrollView style={styles.container}>
            <InputText placeholder='Pesquisar campanha' />
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