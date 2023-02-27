import React, {useState } from "react";
import {TouchableOpacity, View , Image, StyleSheet} from "react-native"
import MapView,{Marker}from 'react-native-maps'

import Button from "../../components/Button";
import colors from "../../global/Colors";
import mapMarker from "../../../assets/map-marker.png";

export default MapScreen = ({ navigation }) => {
  const [position, setPosition] = useState([{ latitude: 0, longitude: 0 }]);

  function handleMarkerPosition(event) {
    setPosition([event.nativeEvent.coordinate]);
}

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MapView
              onPress={handleMarkerPosition}
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
               key={Math.random().toString()}> 
               <Image source={require('../../../assets/Icon-map.png')} />
               </Marker>
            );
          })}
            </MapView>
            <TouchableOpacity style={[styles.buttonMap]}>
                <Button
                    onPress={() => navigation.navigate('RegisterImmobile')}
                    color={colors.blueColor}
                    border={6}
                    width={343}
                    height={52}
                    title="Próximo"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  buttonMap:{
  justifyContent: 'center',
  alignItems:'center',
  height: 56,
  position:'absolute',
  left: 24,
  right: 24,
  bottom: 40,
  }
});