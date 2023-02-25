import { Button, TouchableOpacity, View, Text } from "react-native";
import MapView from "react-native-maps"

import Colors from "../../global/Colors";

export default HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{width: 250, height: 100, backgroundColor: Colors.backgroundMapColor, alignItems:'center', justifyContent:'center'}}>
            <MapView
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',		
              }}
              initialRegion={{
                latitude:-6.88634,
                longitude:-38.5614,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
              }}
            >
            </MapView>
                <TouchableOpacity onPress={() => navigation.navigate('ViewMap')}>
                </TouchableOpacity>
            </View>
            <Text>DashBoard</Text>
            <TouchableOpacity>
                <Button
                    title="+"
                    onPress={() => navigation.navigate('MapScreen')}
                />
            </TouchableOpacity>
        </View>
    );
}