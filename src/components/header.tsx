
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../config/colors'
import MaterialIcon from '@expo/vector-icons/MaterialIcons'

type Props = {
    handleGoBack: () => void
    title: string
}

export default function Header({ title, handleGoBack }: Props) {
    return (
        <View style={styles.container}>
            <MaterialIcon
                onPress={handleGoBack}
                size={20}
                name='arrow-back'
                color={'#364C6F'}
            />
            <Text style={styles.title}>
                {title}
            </Text>
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        borderBottomWidth: 0.77,
        borderBottomColor: colors.border,
        paddingHorizontal: 20,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        color: '#364C6F'
    }
})