
import { StyleSheet, Text, View } from 'react-native'
import Screen from '../../components/screen'
import { colors } from '../../config/colors'
import Separator from '../../components/separator'
import SettingItem from '../../components/setting-item'

export default function Settings() {
    return (
        <Screen>
            <View style={styles.profile}>
                <Text style={styles.text}>IO</Text>
            </View>
            <Text style={styles.userName}>
                Idarcio Oliveira
            </Text>

            <Separator />
            <SettingItem title='Meus dados' />
            <Separator />
            <SettingItem title='Reclamação e denúncias' />
            <Separator />
            <SettingItem title='Terminar Sessão' />
            <Separator />
        </Screen>
    )
}

const styles = StyleSheet.create({
    profile: {
        backgroundColor: '#E8E8E8',
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: '600',
        color: colors.text
    },
    userName: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: 20,
        color: colors.text,
        textAlign: 'center'
    }
})