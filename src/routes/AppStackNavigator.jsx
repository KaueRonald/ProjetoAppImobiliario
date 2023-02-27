import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import ViewMap from '../screens/ViewMap';
import MapScreen from '../screens/MapScreen';
import RegisterImmobile from '../screens/RegisterImmobile';
import Colors from '../global/Colors';

const Stack = createNativeStackNavigator();

export default AppStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Dashboard'
        >
            <Stack.Screen name='Dashboard' component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name='ViewMap' component={ViewMap}
                options={{
                    title: '',
                }}
            />
            <Stack.Screen name='MapScreen' component={MapScreen} />
            <Stack.Screen name='RegisterImmobile' component={RegisterImmobile}
                options={{
                    title: 'Adicione um imóvel',
                    headerTitleStyle: {
                        color: '#5C8599',
                        fontSize: 18
                    },
                }}
            />
        </Stack.Navigator>
    )
}