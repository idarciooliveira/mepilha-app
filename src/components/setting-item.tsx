import { Text, TouchableOpacity } from 'react-native'
import { colors } from '../config/colors'

type Props = {
    title: string
    onPress?: () => void
}

export default function SettingItem({ title, onPress }: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                paddingHorizontal: 20,
                width: '100%'
            }}>
            <Text style={{
                fontSize: 16,
                color: colors.text
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}