import { View, Text, TouchableOpacity } from "react-native";

import Colors from "../../global/Colors";

export default ViewMap = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>View Map</Text>
            <View style={{ width: 250, height: 100, backgroundColor: Colors.backgroundMapColor, alignItems: 'center', justifyContent: 'center' }}>
                    {/* abrir google maps em rotas no onPress */}
                <TouchableOpacity onPress={() => navigation.navigate('ViewMap')}>
                    <Text>Rotas google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}