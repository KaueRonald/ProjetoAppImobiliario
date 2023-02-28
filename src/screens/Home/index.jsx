import {TouchableOpacity, View, Image, Text, StyleSheet} from "react-native";
import MapView, {Marker} from "react-native-maps"
import Button from "../../components/Button";
import colors from "../../global/Colors";
import mapMarker from "../../../assets/map-marker.png";


export default HomeScreen = ({ navigation }) => {
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
            >
              <Marker
               icon={mapMarker}
               coordinate={{latitude: -6.88634,longitude: -38.5614}}
               key={Math.random().toString()}> 
               <Image source={require('../../../assets/Icon-map.png')} />
              </Marker>
              
            </MapView>
                <TouchableOpacity onPress={() => navigation.navigate('ViewMap')}>
                </TouchableOpacity>
            
          
              <View  style={[styles.buttonPlus]}>
                <TouchableOpacity>
                <Text style={{fontSize:18, fontWeight:"600", marginTop: 20}} onPress={() => navigation.navigate('ViewMap')}> Residencia Afro </Text>
                </TouchableOpacity>
                
                <View style={{flex:1, justifyContent:"flex-end", flexDirection:"row", alignItems:"flex-end", paddingBottom:15}}>
                  <Button 
                      onPress={() => navigation.navigate('MapScreen')}
                      backgroundColor={colors.whiteColor}
                      color={colors.blueColor}
                      border={20}
                      width={60}
                      height={57}
                      title={<Text style={{color: colors.whiteColor}}>+</Text>}
                  />
                  </View>
              </View>

        </View>
    );
}

const styles = StyleSheet.create({
  buttonPlus:{
    position:'absolute',
    backgroundColor:colors.backgroundMapColor,
    left:24,
    right:24,
    paddingRight: 20,
    bottom:32,
    height:200,
    paddingLeft:24,
   
  }
});