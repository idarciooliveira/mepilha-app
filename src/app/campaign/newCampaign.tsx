import {
    Text,
    View,
    ScrollView,
    StyleSheet,
} from 'react-native'

import { colors } from '../../config/colors'
import Screen from '../../components/screen'
import InputText from '../../components/inputs/input-text'
import PrimaryButton from '../../components/primary-button'
import Header from '../../components/header'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function NewCampaign() {

    async function handleOnCreateNewAccount() { }

    return (
        <Screen>
            <Header
                title='Criar Nova Campanha'
                handleGoBack={() => { }}
            />
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.subtitle}>
                    Adicione os dados importantes, imagens e o conceito a ser informado
                </Text>

                <Text style={styles.label}>Nome da Campanha</Text>
                <InputText />

                <Text style={styles.label}>Categoria</Text>
                <InputText />

                <Text style={styles.label}>
                    Descreva a sua campanha (sua história, motivação e desafios).
                </Text>
                <InputText />

                <Text style={styles.label}>Meta de financiamento</Text>
                <InputText />

                <Text style={styles.label}>Quando termina a campanha ?</Text>
                <InputText />

                <View style={{ marginTop: 20 }} />

                <PrimaryButton title='Criar conta' onPress={handleOnCreateNewAccount} />

                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        marginTop: 8
                    }} >
                    <Text style={styles.label}>
                        Cancelar
                    </Text>
                </TouchableOpacity>

                <View style={{ marginTop: 20, marginBottom: 20 }} />

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
    }
})