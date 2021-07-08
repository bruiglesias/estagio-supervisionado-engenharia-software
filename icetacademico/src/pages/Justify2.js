import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import Loader from '../components/Loader'
import HeaderJustify from '../components/HeaderJustify'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import {Button} from '../components/Button'
import { 
    validateDate, 
} from '../functions/validadores'

export default function Justify2({ navigation, route }) {

    const [loading, setLoading] = useState(false);
    const { nome, matricula, email, telefone, curso} = route.params;

    const [disciplina, setDisciplina] = useState("")
    const [professor, setProfessor] = useState("")
    const [dataAtividade, setDataAtividade] = useState("")
    const [justificativa, setJustificativa] = useState("")

    if (loading) {
        return <Loader />
    }

    const next = () => {

        if(disciplina == "" || justificativa == "" || professor == "")
        {
            Alert.alert("Preencha todos os campos.")
            return
        } 

        if(!validateDate(dataAtividade))
        {
            Alert.alert("Data inválida.")
            return
        }

        // Indice no dos cursos no banco de dados +1 em relacao aos indices do app
        const curso_ajustado = curso + 1

        navigation.navigate("Justify3", { 
            nome, 
            matricula, 
            email, 
            telefone, 
            curso: curso_ajustado,
            disciplina,
            justificativa,
            professor,
            dataAtividade
        })
      }
    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.green_extra_light} barStyle="default" />
            <View style={styles.header}>
                <HeaderJustify main="Justifique sua" secundary="ausência!" />
            </View>
           <ScrollView style={styles.formContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Segunda etapa:
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Disciplina"
                        autoCapitalize="none"
                        value={disciplina}
                        onChangeText={(text) => setDisciplina(text)}
                    />            
                </View>
                
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Professor"
                        autoCapitalize="none"
                        value={professor}
                        onChangeText={(text) => setProfessor(text)}
                    />            
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Data da atividade: 99/99/9999"
                        autoCapitalize="none"
                        value={dataAtividade}
                        onChangeText={(text) => setDataAtividade(text)}
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
                        value={justificativa}
                        onChangeText={(text) => setJustificativa(text)}
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
