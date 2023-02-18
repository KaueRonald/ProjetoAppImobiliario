import { Button, TouchableOpacity, View, Text } from "react-native";

export default RegisterScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Register Screen</Text>
            <TouchableOpacity>
                <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Register"
                />
            </TouchableOpacity>
        </View>
    );
}