import { View, Text,Image, TouchableOpacity } from "react-native";
import MapView,{Marker} from "react-native-maps"
import openMap from 'react-native-open-maps'

import mapMarker from "../../../assets/map-marker.png";
import Colors from "../../global/Colors";

export default ViewMap = ({ navigation }) => {

  function OpenMaps(){
    openMap({latitude: -6.88634, longitude: -38.5614})
  }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>View Map</Text>
            <View style={{ width: 250, height: 100, backgroundColor: Colors.backgroundMapColor, alignItems: 'center', justifyContent: 'center' }}>
            <MapView
              onPress={OpenMaps}
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
               <Marker
                  icon={mapMarker}
                  coordinate={{latitude: -6.88634,longitude: -38.5614}}
                  key={Math.random().toString()}> 
                  <Image source={require('../../../assets/Icon-map.png')} />
                  </Marker>
            </MapView>
                <TouchableOpacity onPress={() => navigation.navigate('ViewMap')}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}