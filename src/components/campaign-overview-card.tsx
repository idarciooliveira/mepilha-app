

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../config/colors'
import Separator from './separator'

export default function CampaignOverviewCard() {
    return (
        <View style={styles.card}>
            <View style={styles.cardContainer}>
                <Text style={styles.text}>
                    Total Arrecadado
                </Text>
                <Text style={styles.text}>
                    1.000.000.000
                </Text>
            </View>
            <Separator />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>
                    Retirar fundo
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.primary,
        padding: 16,
        width: '100%',
        borderRadius: 10
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    button: {
        alignItems: 'center'
    }
})