import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../../global/Colors';

export default function Button(Props) {
  return (
    <View>
      <TouchableOpacity onPress={Props.onPress} style={[styles.button,
      { backgroundColor: Props.color },
      { borderRadius: Props.border },
      { borderColor: Props.bdcolor },
      { borderWidth: Props.borderW },
      { width: Props.width },
      { height: Props.height }]}>

        <Text style={{ color: Props.colortitle, fontSize: Props.font }}>
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