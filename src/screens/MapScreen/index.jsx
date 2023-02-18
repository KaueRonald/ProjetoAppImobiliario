import { Button, TouchableOpacity, View , Text} from "react-native"

export default MapScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Map screen</Text>
            <TouchableOpacity>
                <Button
                    title="Próximo"
                    onPress={() => navigation.navigate('RegisterImmobile')}
                />
            </TouchableOpacity>
        </View>
    )
}