import { Button, TouchableOpacity, View, Text } from "react-native";

import Colors from "../../global/Colors";

export default HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{width: 250, height: 100, backgroundColor: Colors.backgroundMapColor, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('ViewMap')}>
                    <Text>View Map</Text>
                </TouchableOpacity>
            </View>
            <Text>DashBoard</Text>
            <TouchableOpacity>
                <Button
                    title="+"
                    onPress={() => navigation.navigate('MapScreen')}
                />
            </TouchableOpacity>
        </View>
    );
}