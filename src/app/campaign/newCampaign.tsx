import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import { colors } from '../../config/colors'
import Screen from '../../components/screen'
import InputText from '../../components/inputs/input-text'
import PrimaryButton from '../../components/primary-button'
import Header from '../../components/header'
import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as ImagePicker from 'expo-image-picker';
import notify from '../../config/notify'
import campaign from '../../services/campaign'
import ActivityIndicator from '../../components/activity-indicator'

type Inputs = {
    title: string
    description: string
    goalAmount: string
}

export default function NewCampaign({ navigation }: any) {

    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const { control, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
    const [coverImage, setCoverImage] = useState('');
    const [images, setImages] = useState<string[]>([]);

    const pickCoverImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.canceled) {
            setCoverImage(result.assets[0].uri);
        }
    };

    const pickImages = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            allowsMultipleSelection: true
        });

        if (!result.canceled) {
            let newImages: string[] = []

            for (const image of result.assets) {
                newImages.push(image.uri)
            }

            setImages([
                ...newImages
            ]);

        }
    };

    async function handleOnCreateNewAccount({ title, description, goalAmount }: Inputs) {
        try {
            setLoading(true)

            const response = await campaign.createCampaign({
                cover: coverImage,
                description,
                title,
                goalAmount,
                images,
                userId: user?.id ?? ''
            })

            setLoading(false)

            if (!response.ok)
                return notify.Error({
                    message: 'Ocorreu um erro!, verifique a sua internet'
                })

            reset()
            setImages([])
            setCoverImage('')
            navigation.navigate('hometabs')

            notify.Sucess({
                message: 'A sua campanha foi criada com sucesso!'
            })

        } catch (error) {
            setLoading(false)
            notify.Error({
                message: 'Ocorreu um erro!'
            })
        }
    }

    return (
        <Screen>
            <ActivityIndicator visible={loading} />
            <Header
                title='Criar Nova Campanha'
                handleGoBack={() => navigation.goBack()}
            />

            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >

                <Text style={styles.subtitle}>
                    Adicione os dados importantes, imagens e o conceito a ser informado
                </Text>

                <Text style={styles.label}>Nome da Campanha</Text>
                <Controller control={control} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputText
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}

                        />
                    )} name='title' />



                <Text style={styles.label}>
                    Descreva a sua campanha (sua história, motivação e desafios).
                </Text>

                <Controller control={control} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputText
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}

                        />
                    )} name='description' />


                <Text style={styles.label}>Meta de financiamento</Text>

                <Controller control={control} rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputText
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}

                        />
                    )} name='goalAmount' />

                <View style={{ marginTop: 20 }} />

                {coverImage && <Image source={{ uri: coverImage }} style={styles.img} />}

                <TouchableOpacity
                    onPress={pickCoverImage}
                    style={styles.pickImageButton}>
                    <Text style={{ color: 'white' }}>Selecione a imagem de capa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={pickImages}
                    style={styles.pickImageButton}>
                    <Text style={{ color: 'white' }}>Selecione a até 3 imagens da campanha</Text>
                </TouchableOpacity>

                <PrimaryButton title='Criar Campanha' onPress={handleSubmit(handleOnCreateNewAccount)} />

                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        marginTop: 8
                    }} onPress={() => navigation.goBack()}>
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
    },
    pickImageButton: {
        backgroundColor: 'blue',
        height: 40,
        padding: 8,
        marginBottom: 12,
        alignItems: 'center',
        borderRadius: 10
    },
    img: {
        width: '100%',
        height: 100,
        marginBottom: 12,
        borderRadius: 10
    }
})