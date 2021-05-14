import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, FlatList, Image } from 'react-native'
import Loader from '../components/Loader'
import Header from '../components/Header'
import CardPrimary from '../components/CardPrimary'
import colors from '../styles/colors'
import Podium from '../assets/Podium.png'
import Exam from '../assets/Exam.png'
import Calendar from '../assets/Calendar.png'
import Banner from '../assets/Banner.png'


export default function Home({ navigation }) {

    const [buttons, setButtons] = useState([
        {
            id: 1,
            image: Podium,
            name: "Notícias"
        },
        {
            id: 2,
            image: Exam,
            name: "Solicitações"
        },
        {
            id: 2,
            image: Calendar,
            name: "Calendário Acadêmico"
        }
    ])

    const [loading, setLoading] = useState(false);

    function handleNavigation(id) {
        if (id == 2) {
            navigation.navigate('Solicitations');
        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.green_extra_light} barStyle="default" />
            <View style={styles.header}>
                <Header main="Olá," secundary="seja bem-vindo!" />
            </View>
            <Image source={Banner} style={styles.banner} />
            <View style={styles.buttons}>

                <FlatList
                    style={{ marginTop: -30 }}
                    data={buttons}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <CardPrimary
                            key={item.name}
                            data={item}
                            onPress={() => handleNavigation(item.id)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: colors.background,
    },
    header:
    {
        paddingTop: 20,
        paddingHorizontal: 30,
        backgroundColor: colors.green_extra_light,
        paddingBottom: 90
    },
    buttons:
    {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center',
    },
    banner: {
        width: 286,
        height: 131,
        alignSelf: 'center',
        position: 'relative',
        top: -65,
    }
})