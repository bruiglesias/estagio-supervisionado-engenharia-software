import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../styles/colors'
import Home from '../pages/Home'
import Exam from '../pages/Exam'
import Exam2 from '../pages/Exam2'
import Exam3 from '../pages/Exam3'
import Justify from '../pages/Justify'
import Justify2 from '../pages/Justify2'
import Justify3 from '../pages/Justify3'
import Review from '../pages/Review'
import Review2 from '../pages/Review2'
import Review3 from '../pages/Review3'
import Appeal from '../pages/Appeal'
import Appeal2 from '../pages/Appeal2'
import Solicitations from '../pages/Solicitations'
import Consultation from '../pages/Consultation'

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
        <stackRoutes.Screen
            name='Consultation'
            component={Consultation}
        />
        <stackRoutes.Screen
            name='Exam'
            component={Exam}
        />
        <stackRoutes.Screen
            name='Exam2'
            component={Exam2}
        />
        <stackRoutes.Screen
            name='Exam3'
            component={Exam3}
        />
        <stackRoutes.Screen
            name='Justify'
            component={Justify}
        />
        <stackRoutes.Screen
            name='Justify2'
            component={Justify2}
        />
        <stackRoutes.Screen
            name='Justify3'
            component={Justify3}
        />
        <stackRoutes.Screen
            name='Appeal'
            component={Appeal}
        />
        <stackRoutes.Screen
            name='Appeal2'
            component={Appeal2}
        />
        <stackRoutes.Screen
            name='Review'
            component={Review}
        />
        <stackRoutes.Screen
            name='Review2'
            component={Review2}
        />
        <stackRoutes.Screen
            name='Review3'
            component={Review3}
        />


    </stackRoutes.Navigator>
)

export default AppRoutes;