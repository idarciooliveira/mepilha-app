
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native'
import { useState } from 'react'
import Header from '../../components/header'
import PaymentModal from '../../components/payment-modal'
import Screen from '../../components/screen'
import CampaignCard from '../../components/campaign-card'
import PrimaryButton from '../../components/primary-button'


export default function CampaignDetail() {

    const [showModal, setShowModal] = useState(false)

    function handleOnModalPress() {
        setShowModal(!showModal)
    }

    return (
        <Screen>
            <Header
                title='Detalhe da Campanha'
                handleGoBack={() => { }}
            />
            <ScrollView style={styles.container}>
                <CampaignCard
                    id={'1'}
                    name='Material de estudo para Orfanato Criança Feliz'
                    image={require('../../assets/onboarding01-min.jpg')}
                    currentAmount={80}
                    goalAmount={100}
                    content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet, animi, eum atque quos explicabo quibusdam sint incidunt sit modi neque praesentium veritatis nihil voluptates. Voluptas illo atque aspernatur? Quos!'}
                >
                    <>
                        <View style={styles.support}>
                            <Text style={styles.supportText}>
                                Número de apoiadores
                            </Text>
                            <Text style={styles.supportText}>
                                200
                            </Text>
                        </View>
                        <PrimaryButton
                            title='Apoiar Campanhas'
                            onPress={handleOnModalPress}
                        />
                    </>
                </CampaignCard>

                <Text style={styles.title}>Imagens</Text>

                <ScrollView
                    contentContainerStyle={styles.ImageContainer}
                    horizontal={true}
                >
                    <Image
                        style={styles.img}
                        source={require('../../assets/onboarding01-min.jpg')}
                    />
                    <Image
                        style={styles.img}
                        source={require('../../assets/onboarding01-min.jpg')}
                    />
                </ScrollView>

            </ScrollView>

            <PaymentModal
                handleClose={handleOnModalPress}
                showModal={showModal}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    support: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 16,
    },
    supportText: {
        color: '#364C6F',
        fontSize: 16
    },
    title: {
        color: '#364C6F',
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10
    },
    ImageContainer: {
        marginBottom: 20
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginLeft: 10,
    }
})