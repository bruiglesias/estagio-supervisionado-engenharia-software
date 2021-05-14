import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function savePlant(plant) {
    try {
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        const oldPlants = data ? JSON.parse(data) : {};

        const newPlant = {
            [plant.id]: {
                data: plant
            }
        }

        await AsyncStorage.setItem('@plantmanager:plants',
            JSON.stringify({ ...newPlant, ...oldPlants })
        )
    }
    catch (e) {
        throw new Error(e);
    }
}