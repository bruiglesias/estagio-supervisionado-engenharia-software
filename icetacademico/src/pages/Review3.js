import React, { useState, useEffect } from 'react'
import {
    View, StyleSheet, StatusBar, Text, ScrollView, FlatList, TouchableOpacity, Modal,
    Image, 
} from 'react-native'
import Loader from '../components/Loader'
import HeaderReview from '../components/HeaderReview'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { Col } from 'react-native-easy-grid'
import { Button } from '../components/Button'
import { RectButton } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import mime from "mime";
import FormData from 'form-data'
import axios from 'axios'
import api from '../address/api'
import { saveSolicitation } from '../storage' 


export default function Review3({ navigation, route }) {

    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = React.useState(false)
    const {
        nome,
        matricula,
        email,
        telefone,
        curso,
        disciplina,
        justificativa,
        professor,
        dataAtividade,
    } = route.params;

    const [image, setImage] = useState(null)
    const [images, setImages] = useState([])
    const [message, setMessage] = useState("Sua solicitação foi enviada e já pode ser consultada.")
    const [feedback, setFeedback] = useState(false)

    

    useEffect(() => {
        ; (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraPermissionsAsync()
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!')
                }
            }
        })()
    }, [])

    const pickLibrary = async () => {
        setModalVisible(!modalVisible);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        })

        if (!result.cancelled) {
            setImage(result.uri)
            const filename = result.uri.substring(result.uri.lastIndexOf('/') + 1)
            const newData = [...images]
            newData.push({ image: result.uri, filename: filename })
            setImages(newData)
        }
    }

    const pickCamera = async () => {
        setModalVisible(!modalVisible);
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        })

        if (!result.cancelled) {
            setImage(result.uri)
            const filename = result.uri.substring(result.uri.lastIndexOf('/') + 1)
            const newData = [...images]
            newData.push({ image: result.uri, filename: filename })
            setImages(newData)
        }
    }

    const handleRemove = (item) => {
        const newData = [...images]
        let index = newData.indexOf(item)

        if (index !== -1) {
            newData.splice(index, 1)
        }

        setImages(newData)
    }

    const send = async () => {
        setLoading(true)
        let data = {
            nome,
            matricula,
            email,
            telefone,
            id_curso: curso,
            tipo_solicitacao: "Revisão de prova",
            disciplina,
            justificativa,
            professor,
            data_atividade: dataAtividade
        }
        console.log(data)
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));
        images.map(img => {
            const newImageUri =  "file:///" + img.image.split("file:/").join("");
            console.log("imagem");
            console.log(newImageUri)
            formData.append('image', {
                uri: newImageUri,
                name: newImageUri.split("/").pop(),
                type: mime.getType(newImageUri),
            });
        })
        
        axios({
            url: `${api}/solicitacao/create`,
            method: 'POST',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(async function (response) {
            await saveSolicitation({ id: response.data.id_solicitacao, anexos: response.data.anexos_ids.length})
            setMessage("Sua solicitação foi enviada e já pode ser consultada.")
            setLoading(false)
            setFeedback(!feedback)
        })
        .catch(function (error) {
            setLoading(false)
            setMessage("Ocorreu uma falha ao tentar enviar sua solicitação, verifique sua conexão.")
            setFeedback(!feedback)
        })
        setLoading(false)
    }

    if (loading) {
        return <Loader />
    }

    const renderImages = (item) => {
        return (
            <View style={styles.contentPicture} key={item.item.image}>
                <Image
                    source={{ uri: item.item.image }}
                    style={[styles.picture, { marginBottom: 14 }]}
                />
                <TouchableOpacity
                    style={{ position: 'absolute', right: 10, top: 15 }}
                    activeOpacity={0.75}
                    onPress={() => handleRemove(item.item)}
                >
                    <AntDesign name="closecircleo" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.green_extra_light} barStyle="default" />
            <View style={styles.header}>
                <HeaderReview main="Solicite sua" secundary="revisão de prova!" />
            </View>
            <ScrollView style={styles.formContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Ultima etapa (anexos):
                    </Text>
                </View>

                <View styles={styles.pictures}>
                    <Col>
                        {images.length > 0 && (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={images}
                                renderItem={renderImages}
                                keyExtractor={(item) => item.image}
                                horizontal={false}
                                refreshing={false}
                                numColumns={2}
                            />
                        )}
                        {
                            images.length < 3 &&
                            <RectButton style={styles.addPicture} onPress={() => setModalVisible(!modalVisible)}>
                                <AntDesign name="plus" size={38} color="#3dbc77" />
                            </RectButton>
                        }

                    </Col>
                </View>
                <Button title="Enviar" onPress={send} />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.voltarContainer}>
                        <Text style={styles.voltar}>
                            Voltar
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.outModal}
                    onPress={() => { setModalVisible(!modalVisible) }}
                >
                    <View style={styles.contentModal}>
                        <TouchableOpacity
                            style={styles.exitModal}
                            onPress={() => { setModalVisible(!modalVisible) }}
                        >
                            <AntDesign name="closecircleo" size={24} color="#3dbc77" />
                        </TouchableOpacity>
                        <View style={styles.viewModal}>
                            <TouchableOpacity style={styles.buttonModal} onPress={pickCamera}>
                                <AntDesign name="camerao" size={40} color="#3dbc77" style={{ marginBottom: 10 }} />
                                <Text style={{ color: '#3dbc77' }}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonModal} onPress={pickLibrary}>
                                <AntDesign name="folder1" size={40} color="#3dbc77" style={{ marginBottom: 10 }} />
                                <Text style={{ color: '#3dbc77' }}>Galeria</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={feedback}
                onRequestClose={() => { setFeedback(!feedback) }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.outModal}
                >
                    <View style={styles.contentModal}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textModal}>
                                {message}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("Solicitations")
                            setFeedback(!feedback)
                            }} 
                            style={styles.containerButton}
                        >
                            <Text style={styles.textButton}>Finalizar</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
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
    voltarContainer:
    {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center'
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
    pictures:
    {
        flexDirection: 'row',
        marginLeft: 4,

    },
    addPicture:
    {
        width: 120,
        height: 120,
        backgroundColor: "rgba(34, 164, 93, 0.12)",
        borderRadius: 18,
        marginBottom: 80,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    outModal:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    exitModal:
    {
        position: 'absolute',
        top: 14,
        right: 14,
    },
    contentModal:
    {
        margin: 20,
        width: '90%',
        height: 200,
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 14,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonModal:
    {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewModal:
    {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 20,
        marginTop: 30,
        backgroundColor: '#FFF',
    },
    contentPicture: {
        flexDirection: 'row',
        position: 'relative',
        width: 134,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10
    },
    picture:
    {
        width: '100%',
        height: '100%',
        maxWidth: 120,
        minWidth: 120,
        minHeight: 120,
        borderRadius: 14,
        flex: 1,
    },
    botao: {
        marginTop: 10
    },
    textButton:
    {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    },
    containerButton:
    {
        backgroundColor: colors.green,
        height: 56,
        width: '100%',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textModal:
    {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 5
    },
})
