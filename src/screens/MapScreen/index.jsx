import React, {useState } from "react";
import { Button, TouchableOpacity, View , Text} from "react-native"
import MapView,{Marker}from 'react-native-maps'

import mapMarker from "../../../assets/map-marker.png";

export default MapScreen = ({ navigation }) => {
  const [position, setPosition] = useState([{ latitude: 0, longitude: 0 }]);


  function handleMarkerPosition(coordinate) {
    setPosition([...position, coordinate]);
    
}
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MapView
              onPress={(e) => handleMarkerPosition(e.nativeEvent.coordinate)}
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
            {position.length > 0 &&
                position.map((m) => {
            return (
              <Marker
               icon={mapMarker}
               coordinate={m}
               key={Math.random().toString()}/>
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