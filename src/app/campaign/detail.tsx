
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native'
import { useState } from 'react'
import Header from '../../components/header'
import PaymentModal from '../../components/payment-modal'
import Screen from '../../components/screen'
import CampaignCard from '../../components/campaign-card'
import PrimaryButton from '../../components/primary-button'
import campaign from '../../services/campaign'
import ActivityIndicator from '../../components/activity-indicator'


export default function CampaignDetail({ route, navigation }: any) {

    const { id } = route.params

    const { campaigns, isLoading, error } = campaign.getCampaignById(id)

    const [showModal, setShowModal] = useState(false)

    function handleOnModalPress() {
        setShowModal(!showModal)
    }

    if (error) return (<Text>Ocoreu um erro de internet</Text>)

    return (
        <Screen>
            <Header
                title='Detalhe da Campanha'
                handleGoBack={() => navigation.goBack()}
            />
            <ScrollView style={styles.container}>
                {!campaigns ? (
                    <ActivityIndicator visible={isLoading} />

                ) : (
                    <>
                        <CampaignCard
                            id={campaigns.id}
                            name={campaigns.title}
                            image={{ uri: campaigns.cover_image }}
                            currentAmount={campaigns.amountReceived}
                            goalAmount={campaigns.goalAmount}
                            content={campaigns.description}
                        >
                            <>
                                <View style={styles.support}>
                                    <Text style={styles.supportText}>
                                        Número de apoiadores
                                    </Text>
                                    <Text style={styles.supportText}>
                                        {campaigns.numberOfSupport}
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
                            {campaigns?.images?.map(image => (
                                <Image
                                    key={image}
                                    style={styles.img}
                                    source={{ uri: image }}
                                />
                            ))}

                        </ScrollView></>
                )}

            </ScrollView>

            <PaymentModal
                navigation={navigation}
                campaignId={id}
                campaignName={campaigns.title}
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