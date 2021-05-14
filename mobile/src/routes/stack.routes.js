import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../styles/colors'
import Home from '../pages/Home'
import Solicitations from '../pages/Solicitations'
const stackRoutes = createStackNavigator();

const AppRoutes = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen
            name='Home'
            component={Home}
        />
        <stackRoutes.Screen
            name='Solicitations'
            component={Solicitations}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;