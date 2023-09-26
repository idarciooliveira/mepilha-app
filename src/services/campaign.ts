import { apiClient } from './client'
import useSWRNative from '@nandorojo/swr-react-native'

const endpont = '/campaigns'

const fetch = () => apiClient.get<any>(endpont).then(data => data.data)

export type CampaignProps = {
    id: string
    title: string
    description: string
    cover_image: string
    goalAmount: number
    amountReceived: number
}

const getCampaigns = () => {
    const { error, isLoading, data, mutate } = useSWRNative<CampaignProps[]>(endpont, fetch)

    return {
        campaigns: data,
        error,
        isLoading,
        mutate
    }
}

const getUserCampaigns = (id: string) => {
    const { error, isLoading, data, mutate } = useSWRNative<CampaignProps[]>(`${endpont}/users/${id}`, fetch)

    return {
        campaigns: data,
        error,
        isLoading,
        mutate
    }
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
    const { error, isLoading, data, mutate } = useSWRNative<CampaignDetail[]>(`${endpont}/${id}`, fetch)


    return {
        //@ts-ignore
        campaigns: data[0],
        error,
        isLoading,
        mutate
    }
}


export default {
    getCampaigns,
    getCampaignById,
    getUserCampaigns
}