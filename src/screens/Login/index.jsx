import { Button, TouchableOpacity, View, Text } from "react-native";

export default LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <TouchableOpacity >
                <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Login"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>NÃO TEM CONTA? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}