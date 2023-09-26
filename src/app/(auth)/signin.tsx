
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../config/colors'
import Screen from '../../components/screen'
import InputText from '../../components/inputs/input-text'
import PrimaryButton from '../../components/primary-button'

export default function Signin({ navigation }: any) {

    async function handleOnSignIn() {
        navigation.navigate('hometabs')
    }
    async function handleCreateNewAccount() {
        navigation.navigate('register')
    }

    return (
        <Screen styles={styles.container}>
            <Text style={styles.title}>Bem vindo ao MePilha</Text>
            <Text style={styles.subtitle}>
                A sua plataforma de financiamento colectivo
            </Text>

            <Text style={styles.label}>E-mail</Text>
            <InputText keyboardType='email-address' autoCapitalize='none' />

            <Text style={styles.label}>Password</Text>
            <InputText secureTextEntry={true} />

            <View style={{ marginTop: 20 }} />

            <PrimaryButton title='Entrar' onPress={handleOnSignIn} />

            <View style={{ marginTop: 20 }} />

            <TouchableOpacity onPress={handleCreateNewAccount}>
                <Text style={styles.link}>
                    Não tem uma conta ?
                    <Text style={{ color: colors.primary }}> Criar uma conta</Text>
                </Text>
            </TouchableOpacity>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        color: colors.title,
        marginBottom: 8
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: colors.text,
        marginBottom: 20
    },
    label: {
        color: colors.text,
        fontSize: 16,
        marginBottom: 8,
        marginTop: 11
    },
    link: {
        color: colors.title,
        fontSize: 16,
        textAlign: 'center'
    }
})