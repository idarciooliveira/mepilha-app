
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewProps } from 'react-native'
import { colors } from '../config/colors'

type Props = {
    title: string
    onPress: () => void
    customStyles?: StyleProp<ViewProps>
}

export default function PrimaryButton({ title, onPress, customStyles }: Props) {
    return (
        <TouchableOpacity onPress={onPress}
            style={[styles.container, customStyles]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500'
    }
})