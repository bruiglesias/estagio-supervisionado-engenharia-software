import React, { useState, useEffect } from 'react'
import { View, StyleSheet, StatusBar, FlatList, Image } from 'react-native'
import Loader from '../components/Loader'
import HeaderConsultation from '../components/HeaderConsultation'
import CardSecundary from '../components/CardSecundary'
import colors from '../styles/colors'
import Banner from '../assets/Banner.png'
import { getSolicitations } from '../storage' 
import axios from 'axios'
import api from '../address/api'

export default function Consultation({ navigation }) {

    const [buttons, setButtons] = useState([
        {
            id: 1,
            disciplina: "Fábrica de software",
            tipo: "Justificar ausência",
            anexos: 2,
            status: 'Em análise',
            data_atividade: '30/10/1991'
        },
        {
            id: 2,
            disciplina: "Fábrica de software",
            tipo: "Justificar ausência",
            anexos: 2,
            status: 'Em análise',
            data_atividade: '30/10/1991'
        },
        {
            id: 3,
            disciplina: "Fábrica de software",
            tipo: "Justificar ausência",
            anexos: 2,
            status: 'Em análise',
            data_atividade: '30/10/1991'
        },
        {
            id: 4,
            disciplina: "Fábrica de software",
            tipo: "Justificar ausência",
            anexos: 2,
            status: 'Em análise',
            data_atividade: '30/10/1991'
        },
    ])

    const [loading, setLoading] = useState(true);


    async function getItems() {
        const history = await getSolicitations();
    
       const ArrayOfResults = await axios.all(history.map((element)=>{
           return axios.post(`${api}/solicitacao/search`, {
               id: element.id
           });
       }));

       const resultado = []
      
        for (let i = 0; i < ArrayOfResults.length; i++) {
            resultado.push({ ...ArrayOfResults[i].data, anexos: history[i].anexos})
        }

        setButtons(resultado.reverse())
        setLoading(false)
    }

    useEffect(()=>{
        getItems();
    },[])

    if (loading) {
        return <Loader />
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.green_extra_light} barStyle="default" />
            <View style={styles.header}>
                <HeaderConsultation main="Visualize suas" secundary="solicitações:" />
            </View>
            <Image source={Banner} style={styles.banner} />
            <View style={styles.cards}>

                <FlatList
                    style={{ marginTop: -30 }}
                    data={buttons}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <CardSecundary
                            key={item.name}
                            data={item}
                            onPress={() => {}}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={1}
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
    cards:
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