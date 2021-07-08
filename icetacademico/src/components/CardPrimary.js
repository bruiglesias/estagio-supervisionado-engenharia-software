import React from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


export default function CardPrimary({ data, ...rest }) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Image source={data.image} style={styles.image} />
            <Text style={styles.text}>
                {data.name}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        elevation: 5
    },
    text:
    {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 10,
        fontSize: 12
    },
    image:
    {
        marginTop: 10,
        height: 70,
        width: 70
    }
})