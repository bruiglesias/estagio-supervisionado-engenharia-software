import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, FlatList, Image } from 'react-native'
import Loader from '../components/Loader'
import Header from '../components/Header'
import CardPrimary from '../components/CardPrimary'
import colors from '../styles/colors'
import Banner from '../assets/Banner.png'
import Search from '../assets/Search.png'
import Exam from '../assets/Exam.png'
import Chair from '../assets/Chair.png'
import Lecture from '../assets/Lecture.png'
import Document from '../assets/Document.png'

export default function Solicitations({ navigation }) {

    const [buttons, setButtons] = useState([
        {
            id: 1,
            image: Chair,
            name: "Justificar ausência"
        },
        {
            id: 2,
            image: Exam,
            name: "Prova 2ª chamada"
        },
        {
            id: 3,
            image: Lecture,
            name: "Revisão de prova"
        },
        {
            id: 4,
            image: Document,
            name: "Recurso"
        },
        {
            id: 5,
            image: Search,
            name: "Consultar"
        }
    ])

    const [loading, setLoading] = useState(false);


    if (loading) {
        return <Loader />
    }

    function handleNavigation(id) {
        if (id == 1) {
            navigation.navigate('Justify');
            return
        }
        if (id == 2) {
            navigation.navigate('Exam');
            return
        }
        if (id == 3) {
            navigation.navigate('Review');
            return
        }
        if (id == 4) {
            navigation.navigate('Appeal');
            return
        }
        if (id == 5) {
            navigation.navigate('Consultation');
            return
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.green_extra_light} barStyle="default" />
            <View style={styles.header}>
                <Header main="Escolha sua" secundary="solicitação:" />
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