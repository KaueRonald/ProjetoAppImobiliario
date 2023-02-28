import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../../global/Colors';

export default function Button(Props){
    return(
        <View>
            <TouchableOpacity onPress={Props.onPress} style={[styles.button,
              {backgroundColor: Props.color},
              {borderRadius: Props.border},
              {width: Props.width},
              {height: Props.height}]}>

            <Text style={{color: colors.whiteColor}}>
              {Props.title}
            </Text>

            </TouchableOpacity>
        </View> 
    )
}


const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  }
});