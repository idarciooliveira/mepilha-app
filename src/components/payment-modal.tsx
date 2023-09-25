

import { StyleSheet, Text, View, Modal } from 'react-native'
import MaterialIcon from '@expo/vector-icons/MaterialIcons'
import InputText from './inputs/input-text'
import { colors } from '../config/colors'
import PrimaryButton from './primary-button'

type Props = {
    showModal: boolean
    handleClose: () => void
}

export default function PaymentModal({ showModal, handleClose }: Props) {
    return (
        <Modal
            visible={showModal}
            animationType='slide'
            transparent={true}
        >
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
                    <InputText
                        keyboardType='numeric'
                        autoCapitalize='none'
                    />

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
                            1.000.000,00 AOA
                        </Text>
                    </View>
                    <View style={styles.div} />

                    <PrimaryButton
                        title='Finalizar pagamento'
                        onPress={() => { }}
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