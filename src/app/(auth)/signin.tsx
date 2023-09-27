
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native'
import { colors } from '../../config/colors'
import Screen from '../../components/screen'
import InputText from '../../components/inputs/input-text'
import PrimaryButton from '../../components/primary-button'
import { useForm, Controller } from 'react-hook-form'
import ActivityIndicator from '../../components/activity-indicator'
import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'
import authApi from '../../services/auth'
import notify from '../../config/notify'

type FormData = {
    email: string
    password: string
}

export default function Signin({ navigation }: any) {

    const { login } = useAuth()
    const [loading, setLoading] = useState(false)
    const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>();


    async function handleCreateNewAccount() {
        navigation.navigate('register')
    }

    const onSubmit = async ({ email, password }: FormData) => {
        try {
            Keyboard.dismiss()
            setLoading(true)
            const response = await authApi.login(email, password)
            setLoading(false)

            if (!response.ok) return notify.Error({ message: 'Email ou Senha Incorreta' })

            const access_token = response.data?.access_token ?? ''
            reset()
            login(access_token)

        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen styles={styles.container}>
                <Text style={styles.title}>Bem vindo ao MePilha</Text>
                <Text style={styles.subtitle}>
                    A sua plataforma de financiamento colectivo
                </Text>

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
                            secureTextEntry={true}

                        />
                    )} name='password' />

                <View style={{ marginTop: 20 }} />

                <PrimaryButton title='Entrar' onPress={handleSubmit(onSubmit)} />

                <View style={{ marginTop: 20 }} />

                <TouchableOpacity onPress={handleCreateNewAccount}>
                    <Text style={styles.link}>
                        Não tem uma conta ?
                        <Text style={{ color: colors.primary }}> Criar uma conta</Text>
                    </Text>
                </TouchableOpacity>
            </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        color: colors.title,
        marginBottom: 8,
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