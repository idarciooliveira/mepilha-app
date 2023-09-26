import Toast from 'react-native-toast-message'

type Props = {
    message: string
    visibilityTime?: number
    type?: 'success' | 'error' | 'info'
}

function Error({ message }: Props) {
    Toast.show({
        autoHide: true,
        type: 'error',
        text1: 'Houve um erro',
        text2: message,
        position: 'top',

    })
}

function Sucess({ message, visibilityTime = 4000 }: Props) {
    Toast.show({
        autoHide: true,
        type: 'success',
        text1: message,
        position: 'top',
        visibilityTime

    })
}

function Alert({ message }: Props) {
    Toast.show({
        autoHide: true,
        type: 'info',
        text1: 'Aviso',
        text2: message,
        position: 'top',
        topOffset: 60
    })
}

export default {
    Error,
    Sucess,
    Alert
}