import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Loader from '../components/Loader'
import HeaderAppeal from '../components/HeaderAppeal'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import {Button} from '../components/Button'


export default function Appeal({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [codigo, setCodigo] = useState("")
    const [justificativa, setJustificativa] = useState("")

    const next = () => {

        if(codigo == "" || justificativa == "" )
        {
            Alert.alert("Preencha todos os campos.")
            return
        } 

        navigation.navigate("Appeal2", { codigo, justificativa})
    }

    if (loading) {
        return <Loader />
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.green_extra_light} barStyle="default" />
            <View style={styles.header}>
                <HeaderAppeal main="Faça seu" secundary="recurso!" />
            </View>
           <ScrollView style={styles.formContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Primeira etapa:
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Código da solicitação"
                        autoCapitalize="none"
                        onChangeText={text => setCodigo(text)}
                        value={codigo}
                    />            
                </View>

                <View style={styles.inputjustify}>
                    <TextInput
                        style={styles.input}
                        placeholder="Escreva aqui sua justificativa"
                        autoCapitalize="none"
                        editable
                        maxLength={500}
                        multiline
                        numberOfLines={4}
                        onChangeText={text => setJustificativa(text)}
                        value={justificativa}
                    />            
                </View>
                <Button title="Avançar" onPress={next} />
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                <View style={styles.voltarContainer}>
                    <Text style={styles.voltar}>
                        Voltar
                    </Text>
                </View>
                </TouchableOpacity>
           </ScrollView>
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
    formContainer:
    {
        flex: 1,
        paddingHorizontal: "10%",
        paddingTop: 30,
    },
    inputContainer:
    {
        width: "100%",
        paddingVertical: 4,
        paddingHorizontal: 14,
        height: 50,
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 30,
        backgroundColor:"#fbfbfb",
        borderWidth: 1,
        borderColor: colors.heading,
        borderRadius: 6
    },
    inputjustify:
    {
        width: "100%",
        paddingVertical: 4,
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 30,
        backgroundColor:"#fbfbfb",
        borderWidth: 1,
        borderColor: colors.heading,
        borderRadius: 6
    },
    input:
    {
        flex: 1,
    },
    voltarContainer:
    {
        flex: 1,
        paddingTop: 20,
        marginBottom:40,
        alignItems: 'center',

    },
    voltar:
    {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 10
    },
    textContainer:
    {
        marginBottom: 20
    },
    text:
    {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 5
    },
})
