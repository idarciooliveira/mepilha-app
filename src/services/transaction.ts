import { apiClient, fetcher } from './client'
import useSWRNative from '@nandorojo/swr-react-native'
const endpont = '/payments'

export type CreateTransaction = {
    userId: string
    campaignId: string
    amount: number
}

const createTransaction = async (data: CreateTransaction) => {
    return await apiClient.post(endpont, {
        ...data,
        paymentMethod: 'Direct'
    })
}



const getUserTotalGained = (id: string) => {
    // @ts-ignore
    const { error, isLoading, data, mutate } = useSWRNative<number>(`${endpont}/users/${id}`, fetcher)


    return {
        //@ts-ignore
        amount: data,
        error,
        isLoading,
        mutate
    }
}

export default {
    createTransaction,
    getUserTotalGained
}