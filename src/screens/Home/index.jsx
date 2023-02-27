import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import MapView from "react-native-maps"
import Button from "../../components/Button";
import colors from "../../global/Colors";


export default HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{width: 250, height: 100, backgroundColor: colors.backgroundMapColor, alignItems:'center', justifyContent:'center'}}>
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
          
              <TouchableOpacity style={[styles.buttonPlus]}>
                <Text>DashBoard</Text>
                  <Button
                      onPress={() => navigation.navigate('MapScreen')}
                      color={colors.blueColor}
                      border={6}
                      width={60}
                      height={57}
                      title="+"
                  />
              </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
  buttonPlus:{
    position:'absolute',
    left:24,
    right:24,
    bottom:32,
    height:46,
    paddingLeft:24,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
});