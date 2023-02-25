import React, {useState } from "react";
import { Button, TouchableOpacity, View , Text} from "react-native"
import MapView,{ Marker }from 'react-native-maps'

export default MapScreen = ({ navigation }) => {
    const [marker, setMarker] = useState([]);

    const handleNewMarker = (coordinate) => {
      setMarker([...marker, coordinate]);
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MapView
              onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
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
            {marker.length > 0 &&
                marker.map((m) => {
            return (
              <Marker coordinate={m} key={Math.random().toString()}/>
            );
          })}
            </MapView>
            <TouchableOpacity>
                <Button
                    title="Próximo"
                    onPress={() => navigation.navigate('RegisterImmobile')}
                />
            </TouchableOpacity>
        </View>
    )
}