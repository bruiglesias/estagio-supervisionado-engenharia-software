import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { TextInputMask } from 'react-native-masked-text';
import { Transition, Transitioning } from 'react-native-reanimated'
import HeaderReview from '../components/HeaderReview'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { AntDesign } from '@expo/vector-icons'
import { Checkbox } from 'react-native-paper'
import { Button } from '../components/Button'
import { 
    validateBrazilianNames, 
    validateEmail, 
    validateInternationalPhoneWithMask 
} from '../functions/validadores' 

const checkCursos = [
    {
        id: 0,
        text: 'Agronomia',
        checked: false,
    },
    {
        id: 1,
        text: 'Engenharia de Software',
        checked: false,
    },
    {
        id: 2,
        text: 'Engenharia de Produção',
        checked: false,
    },
    {
        id: 3,
        text: 'Engenharia de Sanitária',
        checked: false,
    },
    {
        id: 4,
        text: 'Farmácia',
        checked: false,
    },
    {
        id: 5,
        text: 'Química Industrial',
        checked: false,
    },
    {
        id: 6,
        text: 'Sistemas de Informação',
        checked: false,
    },
    {
        id: 7,
        text: 'Química e Biologia',
        checked: false,
    },
    {
        id: 8,
        text: 'Matemática e Física',
        checked: false,
    },
]

const CONTENT = [
    {
        title: 'Qual seu curso?',
    },
]

const transition = (
    <Transition.Together>
        <Transition.In type="fade" durationMs={200} />
        <Transition.Change />
        <Transition.Out type="fade" durationMs={200} />
    </Transition.Together>
) 


export default function Review({ navigation }) {


    const [activeSection, setActiveSection] = useState(0)
    const [cursoSelected, setCurso] = useState(null)
    const [checks, setChecks] = useState(checkCursos)
    const [checksServices, setChecksServices] = useState(cursoSelected !== null && checks[cursoSelected].services)
    
    const [nome, setNome] = useState("")
    const [matricula, setMatricula] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")


    const ref = React.useRef()

    const handleCheck = (id, type) => {
        var vector = []
        if (type === 'curso') {
            setCurso(id)
            setChecksServices(checks[id].services)
            vector = checks
        } else {
            vector = checksServices
        }
        const index = vector.findIndex((obj) => obj.id === id)
        const newData = vector.map((checkbox, i) =>
        {
            if(i !== index)
            {
                return {
              ...checkbox,
              checked: false,
                }
            }
            else if (i === index)
            {
                if(checkbox.checked)
                {
                    setCurso(null)
                }
                return {
                    ...checkbox,
                    checked: !checkbox.checked,
                }
            }
            else
            {
                return checkbox
            }  
            
        }
          
        )  
        type === 'curso' ? setChecks(newData) : setChecksServices(newData)
      }

    const next = () => {

        if (!validateBrazilianNames(nome)) {
          Alert.alert("Digite um nome válido.")
          return;
        }

        if(!matricula.length == 6)
        {
            Alert.alert("Matricula inválida.")
            return;
        }
    
        if (!validateEmail(email)) {
          Alert.alert("Email inválido.")
          return;
        }
    
        if (!validateInternationalPhoneWithMask(telefone)) {
          Alert.alert("Telefone inválido.")
          return
        }

        if(cursoSelected == null)
        {
            Alert.alert("Escolha um curso.")
            return
        }
    
        var number = telefone.replace("(", "")
        number = number.replace(")", "")
        number = number.replace("-", "")
        number = number.replace(" ", "")
        number = number.replace(" ", "")
    
        navigation.navigate("Review2", { nome, matricula, email, telefone, curso: cursoSelected})
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
                        Primeira etapa:
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome Completo"
                        autoCapitalize="none"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Matricula"
                        keyboardType='number-pad'
                        autoCapitalize="none"
                        value={matricula}
                        onChangeText={(text) => setMatricula(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        autoCapitalize="none"
                        keyboardType='email-address'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInputMask
                        style={styles.input}
                   
                        autoCapitalize="none"
                        value={telefone}
                        type={'custom'}
                        keyboardType='number-pad'
                        placeholder="Telefone"
                        options={{ mask: '+99 (99) 99999-9999' }}
                        onChangeText={(text) => setTelefone(text)}
                    />
                </View>


                <Transitioning.View ref={ref} transition={transition} style={{marginTop: -20, marginBottom: 20}}>
                    {CONTENT.map((item, index) => (
                        <View key={index}>
                            <RectButton
                                style={styles.headerCollapse}
                                onPress={() => {
                                    ref.current.animateNextTransition()
                                    setActiveSection(index === activeSection ? null : index)
                                }}
                                activeOpacity={0.9}
                            >

                                <Text style={styles.text}>
                                    Qual seu curso?
                                </Text>

                                {activeSection === index ? (
                                    <AntDesign name="caretup" size={12} color="black" />
                                ) : (
                                    <AntDesign name="caretdown" size={12} color="black" />
                                )}
                            </RectButton>

                            {activeSection === index &&
                                <View style={styles.collapse}>
                                    {checks.map((item, id) => (
                                        <View style={styles.checkItem} key={id}>
                                            <Checkbox
                                                status={item.checked ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    handleCheck(id, 'curso')
                                                }}
                                                color="#22A45D"
                                                uncheckedColor="#CDCDCD"
                                                style={{ backgroundColor: '#fff' }}
                                            />
                                            <Text
                                                style={{ marginLeft: 4, color: colors.green_dark }}
                                                onPress={() => {

                                                }}
                                            >
                                                {item.text}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            }
                        </View>
                    ))}
                </Transitioning.View>
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
        backgroundColor: "#fbfbfb",
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
    headerCollapse:
    {
        backgroundColor: '#FFF',
        marginRight: 8,
        marginBottom: 8,
        padding: 10,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    collapse:
    {
        padding: 4
    },
    checkItem:
    {
        flexDirection: "row",
        alignItems: "center"
    }
})
