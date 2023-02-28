import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import MapView,{Marker} from "react-native-maps"
import openMap from 'react-native-open-maps'

import mapMarker from "../../../assets/map-marker.png";
import Colors from "../../global/Colors";

export default ViewMap = ({ navigation }) => {

  function OpenMaps(){
    openMap({latitude: -6.88634, longitude: -38.5614})
  }

    return (

      <ScrollView> 
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require("../../images/image1.png")}></Image>
        </View>
        <View style={{ marginLeft:12 }}>
          <Text style={{ color: Colors.grayTextColor, fontSize: 18, fontWeight: "600", marginBottom: 12}}>Residencia afro</Text>
          <Text style={{ color: Colors.grayTextColor, fontSize: 12, fontWeight: "regular", marginBottom: 40}}>o residencial afro possui o apto 201 com 4 quartos, duas suítes, uma cozinha, uma sala e uma garagem.</Text>
       </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{color:Colors.grayTextColor}}>View Map</Text>
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

          <View style={{ marginLeft:12 }}>
            <View style={{ borderColor: Colors.grayTextColor, borderWidth: 0.3, width: 350, alignItems: 'center', marginTop:20, marginBottom: 30 }}></View>
            <Text style={{ color: Colors.grayTextColor, fontSize: 18, fontWeight: "600", marginBottom: 12 }}>Instrução para compra ou aluguel</Text>
            <Text style={{ color: Colors.grayTextColor, fontSize: 12, fontWeight: "regular", marginBottom: 40}}>Entre em contado com o proprietário  por meio do telefone 999999999</Text>
          </View>
        </ScrollView>  
    )
}