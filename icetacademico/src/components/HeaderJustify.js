import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import Chair from '../assets/Chair.png'

export default function Header({ main, secundary }) {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>{main}</Text>
                <Text style={styles.username}>{secundary}</Text>
            </View>
            <Image source={Chair} style={styles.image} />
        </View>
    )
}


const styles = StyleSheet.create({
    container:
    {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greeting:
    {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    username:
    {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    },
    image:
    {
        width: 80,
        height: 80,

    }

})