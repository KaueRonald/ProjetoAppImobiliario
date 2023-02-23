import { Button, TouchableOpacity, View , Text} from "react-native"
import MapView from "react-native-maps"

export default MapScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
            />
            <TouchableOpacity>
                <Button
                    title="Próximo"
                    onPress={() => navigation.navigate('RegisterImmobile')}
                />
            </TouchableOpacity>
        </View>
    )
}