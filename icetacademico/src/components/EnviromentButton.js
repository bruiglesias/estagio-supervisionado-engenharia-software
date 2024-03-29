import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function EnviromentButton({ title, active, ...rest }) {


    return (
        <RectButton
            style={[
                styles.container,
                active && styles.containerActive
            ]}
            {...rest}
        >
            <Text style={[
                styles.text,
                active && styles.textActive
            ]}>{title}</Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: colors.shape,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 10
    },
    containerActive: {
        backgroundColor: colors.green_light
    },
    text:
    {
        color: colors.heading,
        fontFamily: fonts.text,
    },
    textActive:
    {
        fontFamily: fonts.heading,
        color: colors.green_dark,
    }
})