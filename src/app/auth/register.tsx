import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { router } from 'expo-router'

import { colors } from '../../config/colors'
import InputText from '../../components/inputs/inputText'
import PrimaryButton from '../../components/primaryButton'
import Screen from '../../components/screen'

export default function Register() {

    async function handleOnCreateNewAccount() { }
    async function handleOnSignIn() {
        router.back()
    }

    return (
        <Screen>
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Criar conta</Text>
                <Text style={styles.subtitle}>
                    Junte-se a maior comunidade de financiamento coletivo da Huiíla {'\n'}e comece a mudar vidas
                </Text>

                <Text style={styles.label}>Nome</Text>
                <InputText />

                <Text style={styles.label}>Sobrenome</Text>
                <InputText />

                <Text style={styles.label}>Bilhete de identidade</Text>
                <InputText />

                <Text style={styles.label}>Número de telefone</Text>
                <InputText />

                <Text style={styles.label}>E-mail</Text>
                <InputText keyboardType='email-address' autoCapitalize='none' />

                <Text style={styles.label}>Password</Text>
                <InputText secureTextEntry={true} />

                <View style={{ marginTop: 20 }} />

                <PrimaryButton title='Criar conta' onPress={handleOnCreateNewAccount} />

                <View style={{ marginTop: 20 }} />

                <TouchableOpacity onPress={handleOnSignIn}>
                    <Text style={styles.link}>
                        Ja tem uma conta ?
                        <Text style={{ color: colors.primary }}> Entrar</Text>
                    </Text>
                </TouchableOpacity>
                <View style={{ marginBottom: 20 }} />
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 20,
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
        textAlign: 'center',
        marginBottom: 20
    }
})