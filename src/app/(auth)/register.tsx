import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Keyboard,
} from 'react-native'

import { colors } from '../../config/colors'
import InputText from '../../components/inputs/input-text'
import PrimaryButton from '../../components/primary-button'
import Screen from '../../components/screen'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ActivityIndicator from '../../components/activity-indicator'
import authApi from '../../services/auth'
import notify from '../../config/notify'
import { useAuth } from '../../hooks/useAuth'


type FormData = {
    name: string
    lastname: string
    identity: string
    phoneNumber: string
    email: string
    password: string
}

export default function Register({ navigation }: any) {

    const { login } = useAuth()
    const [loading, setLoading] = useState(false)
    const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>();


    async function handleOnCreateNewAccount(data: FormData) {
        try {
            Keyboard.dismiss()

            setLoading(true)

            const registerResponse = await authApi.register(data)

            setLoading(false)

            if (!registerResponse.ok) {
                return notify.Error({
                    message: registerResponse.data.message ?? 'Não foi possível concluir o seu registro verifique seu dados'
                })
            }

            const authenticateResponse = await authApi.login(data.email, data.password)
            setLoading(false)

            if (!authenticateResponse.ok) {
                return notify.Error({
                    message: registerResponse.data.message ?? 'Não foi possível concluir o seu registro verifique seu dados'
                })
            }

            const access_token = authenticateResponse.data?.access_token ?? ''

            navigation.replace('hometabs')
            reset()
            login(access_token)

        } catch (error) {
            setLoading(false)
        }
    }

    async function handleOnSignIn() {
        navigation.goBack()
    }

    return (
        <Screen>
            <ActivityIndicator visible={loading} />
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Criar conta</Text>
                <Text style={styles.subtitle}>
                    Junte-se a maior comunidade de financiamento coletivo da Huíla {'\n'}e comece a mudar vidas
                </Text>

                <Text style={styles.label}>Nome</Text>
                <Controller control={control} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputText
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}

                        />
                    )} name='name' />

                <Text style={styles.label}>Sobrenome</Text>
                <Controller control={control} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputText
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}

                        />
                    )} name='lastname' />

                <Text style={styles.label}>Bilhete de identidade</Text>
                <Controller control={control} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputText
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}

                        />
                    )} name='identity' />

                <Text style={styles.label}>Número de telefone</Text>
                <Controller control={control} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputText
                            value={value}
                            keyboardType='number-pad'
                            onChangeText={onChange}
                            onBlur={onBlur}

                        />
                    )} name='phoneNumber' />

                <Text style={styles.label}>E-mail</Text>
                <Controller control={control} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputText
                            value={value}
                            keyboardType='email-address'
                            onChangeText={onChange}
                            onBlur={onBlur}

                        />
                    )} name='email' />

                <Text style={styles.label}>Password</Text>

                <Controller control={control} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputText
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}

                        />
                    )} name='password' />

                <View style={{ marginTop: 20 }} />

                <PrimaryButton
                    title='Criar conta'
                    onPress={handleSubmit(handleOnCreateNewAccount)} />

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