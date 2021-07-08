import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function saveSolicitation(new_solicitation) {
    try {
        const data = await AsyncStorage.getItem('@icetacademico:solicitation');
        const array_solicitation = data ? JSON.parse(data) : [];

        array_solicitation.push(new_solicitation)
        await AsyncStorage.setItem('@icetacademico:solicitation', JSON.stringify(array_solicitation))
    }
    catch (e) {
        throw new Error(e);
    }
}

export async function getSolicitations() {
    try {
        const data = await AsyncStorage.getItem('@icetacademico:solicitation');
        const array_solicitation = data ? JSON.parse(data) : [];

        return array_solicitation
    }
    catch (e) {
        throw new Error(e);
    }
}