import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, FlatList, Image } from 'react-native'
import Loader from '../components/Loader'
import Header from '../components/Header'
import CardPrimary from '../components/CardPrimary'
import colors from '../styles/colors'
import Banner from '../assets/Banner.png'
import Exam from '../assets/Exam.png'
import Chair from '../assets/Chair.png'
import Lecture from '../assets/Lecture.png'


export default function Solicitations({ navigation }) {
    const [filteredPlants, setFilteredPlants] = useState([
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
            id: 2,
            image: Lecture,
            name: "Revisão de prova"
        }
    ])

    const [loading, setLoading] = useState(false);


    if (loading) {
        return <Loader />
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.green_extra_light} barStyle="default" />
            <View style={styles.header}>
                <Header main="Escolha sua" secundary="solicitação:" />
            </View>
            <Image source={Banner} style={styles.banner} />
            <View style={styles.plants}>

                <FlatList
                    style={{ marginTop: -30 }}
                    data={filteredPlants}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <CardPrimary
                            key={item.name}
                            data={item}
                            onPress={() => { }}
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
    enviromentList:
    {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        width: '150%',
        paddingLeft: 5,
        marginVertical: 32
    },
    plants:
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