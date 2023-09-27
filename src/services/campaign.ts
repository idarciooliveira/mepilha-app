import { apiClient, fetcher } from './client'
import useSWRNative from '@nandorojo/swr-react-native'

const endpont = '/campaigns'

export type CampaignProps = {
    id: string
    title: string
    description: string
    cover_image: string
    goalAmount: number
    amountReceived: number
}

const getCampaigns = () => {
    const { error, isLoading, data, mutate } = useSWRNative<CampaignProps[]>(endpont, fetcher)

    return {
        campaigns: data,
        error,
        isLoading,
        mutate
    }
}

const getUserCampaigns = (id: string) => {
    const { error, isLoading, data, mutate } = useSWRNative<CampaignProps[]>(`${endpont}/users/${id}`, fetcher)

    return {
        campaigns: data,
        error,
        isLoading,
        mutate
    }
}

export type CreateCampaign = {
    title: string
    description: string
    cover: string
    images: string[]
    goalAmount: string
    userId: string
}

async function createCampaign(data: CreateCampaign) {
    const formData = new FormData()

    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('goalAmount', data.goalAmount)
    formData.append('categoryId', 'cb7502f7-6073-4afa-a813-90a899cfe75f')
    formData.append('userId', data.userId)
    formData.append('endAt', '2023-09-26T21:57:34.810Z')

    // @ts-ignore
    formData.append('cover', {
        uri: data.cover,
        name: 'image',
        type: 'image/jpeg'
    })

    data.images.forEach(img => {
        // @ts-ignore
        formData.append('files', {
            uri: img,
            name: 'image',
            type: 'image/jpeg'
        })
    })

    return await apiClient.post(endpont, formData, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })

}

export type CampaignDetail = {
    id: string
    title: string
    description: string
    cover_image: string
    goalAmount: number
    amountReceived: number
    images: string[]
    numberOfSupport: number
}

const getCampaignById = (id: string) => {
    // @ts-ignore
    const { error, isLoading, data, mutate } = useSWRNative<CampaignDetail>(`${endpont}/${id}`, fetcher)

    return {
        //@ts-ignore
        campaigns: data,
        error,
        isLoading,
        mutate
    }
}


export default {
    getCampaigns,
    getCampaignById,
    getUserCampaigns,
    createCampaign
}