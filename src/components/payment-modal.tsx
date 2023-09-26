

import { StyleSheet, Text, View, Modal, Keyboard } from 'react-native'
import MaterialIcon from '@expo/vector-icons/MaterialIcons'
import InputText from './inputs/input-text'
import { colors } from '../config/colors'
import PrimaryButton from './primary-button'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth'
import ActivityIndicator from './activity-indicator'
import notify from '../config/notify'
import transaction from '../services/transaction'

type Props = {
    campaignId: string
    campaignName: string
    showModal: boolean
    navigation: any
    handleClose: () => void
}

type FormData = {
    amount: string
}

export default function PaymentModal({
    showModal,
    handleClose,
    campaignId,
    campaignName,
    navigation
}: Props) {

    const { user } = useAuth()
    const [loading, setLoading] = useState(false)

    const { control, handleSubmit, reset, watch } = useForm<FormData>();

    async function handleOnSubmit({ amount }: FormData) {
        try {
            console.log('pressed!')
            Keyboard.dismiss()
            setLoading(true)
            const response = await transaction.createTransaction({
                amount: Number(amount),
                userId: user?.id ?? '',
                campaignId
            })
            setLoading(false)

            if (!response.ok) return notify.Error({ message: 'Não foi possível processar o pagamento, verifique a sua internet' })
            reset()
            handleClose()
            navigation.replace('payment_sucess', {
                name: user?.name,
                amount,
                campaignName
            })

        } catch (error) {
            setLoading(false)
        }
    }


    return (
        <Modal
            visible={showModal}
            animationType='slide'
            transparent={true}
        >
            <ActivityIndicator visible={loading} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <View />
                    <Text style={styles.text}>
                        Detalhe de Pagamento
                    </Text>
                    <MaterialIcon
                        onPress={handleClose}
                        name='close'
                        color={'#364C6F'}
                        size={20}
                    />
                </View>
                <View style={styles.separator} />

                <View style={styles.form}>
                    <Text style={styles.label}>Montante</Text>
                    <Controller control={control} rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputText
                                value={value}
                                keyboardType='number-pad'
                                onChangeText={onChange}
                                onBlur={onBlur}

                            />
                        )} name='amount' />

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 20,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: colors.text
                        }}>
                            Total a pagar
                        </Text>
                        <Text style={{
                            fontSize: 18,
                            color: '#364C6F',
                            fontWeight: '500'
                        }}>
                            {watch('amount')}
                        </Text>
                    </View>
                    <View style={styles.div} />

                    <PrimaryButton
                        title='Finalizar pagamento'
                        onPress={handleSubmit(handleOnSubmit)}
                    />
                </View>


            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '75%',
        width: '100%',
        backgroundColor: colors.background,
        borderTopColor: colors.border,
        borderTopWidth: 0.77,
        borderLeftColor: colors.border,
        borderLeftWidth: 0.77,
        borderRightColor: colors.border,
        borderRightWidth: 0.77,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    text: {
        color: '#364C6F',
        fontSize: 18,
        fontWeight: '500'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    separator: {
        height: 0.55,
        width: '100%',
        backgroundColor: '#364C6F'
    },
    div: {
        marginTop: 18,
        marginBottom: 20,
        height: 0.33,
        width: '100%',
        backgroundColor: '#364C6F'
    },
    label: {
        color: '#364C6F',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        marginTop: 11
    },
    form: {
        paddingHorizontal: 20
    }
})