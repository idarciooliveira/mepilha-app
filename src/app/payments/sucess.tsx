

import Screen from '../../components/screen'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config/colors'
import PrimaryButton from '../../components/primary-button'

export default function Sucess() {
    return (
        <Screen styles={styles.container}>
            <Image
                style={styles.img}
                source={require('../../assets/sucess.png')}
            />
            <Text style={styles.text}>
                Oliveira! você apoiou a campanha com
            </Text>

            <Text style={styles.text}>
                85.000 AOA
            </Text>

            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    Cesta basica para o Orfanato Criança Feliz
                </Text>
            </View>

            <PrimaryButton
                title='CONTINUAR'
                onPress={() => { }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 80,
        height: 80,
    },
    text: {
        color: '#364C6F',
        fontSize: 18,
        width: '100%',
        textAlign: 'center',
        marginTop: 12
    },
    buttonContainer: {
        width: '100%',
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
        borderColor: colors.border,
        marginTop: 12,
        marginBottom: 20
    },
    buttonText: {
        color: colors.text,
        fontSize: 16,
        textAlign: 'center'
    }
})