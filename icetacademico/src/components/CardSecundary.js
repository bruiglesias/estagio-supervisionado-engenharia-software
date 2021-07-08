import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


export default function CardSecundary({ data, ...rest }) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 20}}>
                <Text style={styles.text}>
                    Numero da solicitação: 
                </Text>
                <Text style={styles.data}>
                    {data.id_solicitacao}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 20, marginTop: -10}}>
                <Text style={styles.text}>
                    Disciplina: 
                </Text>
                <Text style={styles.data}>
                    {data.disciplina}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 20, marginTop: -10}}>
                <Text style={styles.text}>
                    Tipo: 
                </Text>
                <Text style={styles.data}>
                    {data.tipo_solicitacao}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 20, marginTop: -10}}>
                <View style={{flexDirection: 'row', width: '50%'}}>
                    <Text style={styles.text}>
                        Anexos: 
                    </Text>
                    <Text style={styles.data}>
                        {data.anexos}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', width: '50%'}}>
                    <Text style={styles.text}>
                        Data: 
                    </Text>
                    <Text style={styles.data}>
                        {data.data_atividade}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 20, marginTop: -10}}>
                <Text style={styles.text}>
                    Status: 
                </Text>
                <Text style={styles.data}>
                    {data.status}
                </Text>
            </View>
            
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        maxWidth: '90%',
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
    data:
    {
        color: colors.green_dark,
        fontFamily: fonts.text,
        marginVertical: 10,
        fontSize: 12,
        marginLeft: 5
    }
})