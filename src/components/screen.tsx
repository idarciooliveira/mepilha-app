
import Constant from 'expo-constants'
import { SafeAreaView } from 'react-native'
import React from 'react'
import { StyleProp } from 'react-native'
import { ViewStyle } from 'react-native'

type Props = {
    children: any
    styles?: StyleProp<ViewStyle>
}

export default function Screen({ children, styles }: Props) {
    return (
        <SafeAreaView style={[{
            flex: 1,
            paddingTop: Constant.statusBarHeight,
            backgroundColor: '#fff'
        }, styles]}>
            {children}
        </SafeAreaView>
    )
}
