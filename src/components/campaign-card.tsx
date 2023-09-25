

import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import { colors } from '../config/colors'
import PrimaryButton from './primary-button'
import Separator from './separator'

type Props = {
    id: string
    name: string
    goalAmount: number
    currentAmount: number
    content?: string
    image: ImageSourcePropType
    onPress?: () => void
    children?: React.ReactElement
}

export default function CampaignCard({
    id,
    name,
    goalAmount,
    currentAmount,
    image,
    onPress,
    content,
    children
}: Props) {
    return (
        <View style={styles.card} key={id}>
            <Image
                source={image}
                resizeMode='cover'
                style={styles.img}
            />
            <Text style={styles.title} numberOfLines={2}>
                {name}
            </Text>

            {content &&
                <Text style={styles.content}>
                    {content}
                </Text>
            }

            <View style={styles.footerContainer}>
                <View style={{ flex: 2, gap: 4 }}>
                    <View style={styles.supportRow}>
                        <Text style={styles.amountGainedText}>
                            Arrecadados
                        </Text>
                        <Text style={styles.amountGainedPercentagesText}>
                            {currentAmount}
                        </Text>
                    </View>
                    <View style={styles.supportRow}>
                        <Text style={styles.goal}>Meta</Text>
                        <Text style={styles.goalAmount}>
                            {goalAmount}
                        </Text>
                    </View>
                </View>
                {onPress && (
                    <View style={{ flex: 1 }}>
                        <PrimaryButton title='Apoiar' onPress={onPress} />
                    </View>
                )}
            </View>

            <Separator />

            {children}

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 10,
        borderWidth: 0.55,
        borderColor: colors.border,
        maxHeight: 800,
        padding: 12,
        marginTop: 12
    },
    img: {
        width: '100%',
        height: 170,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        fontSize: 16,
        paddingHorizontal: 8,
        marginTop: 8,
        color: '#364C6F'
    },
    content: {
        fontSize: 14,
        paddingHorizontal: 8,
        marginTop: 8,
        marginBottom: 12,
        width: '100%',
        textAlign: 'justify'
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8
    },
    supportRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    amountGainedText: {
        color: colors.green,
        fontWeight: '600'
    },
    amountGainedPercentagesText: {
        fontWeight: '800'
    },
    goal: {
        backgroundColor: '#D2E892',
        color: '#8CAA34',
        width: 60,
        textAlign: 'center',
        borderRadius: 4
    },
    goalAmount: {
        color: '#364C6F',
        fontWeight: '500',
        fontSize: 16
    }
})