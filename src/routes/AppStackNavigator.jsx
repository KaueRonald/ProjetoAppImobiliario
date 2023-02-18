import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import ViewMap from '../screens/ViewMap';
import MapScreen from '../screens/MapScreen';
import RegisterImmobile from '../screens/RegisterImmobile';

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
            <Stack.Screen name='RegisterImmobile' component={RegisterImmobile} />
        </Stack.Navigator>
    )
}