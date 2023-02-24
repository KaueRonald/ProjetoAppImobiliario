import { TouchableOpacity, View, Text } from "react-native";
import Button from "../../components/Button";
import colors from "../../global/Colors";

export default LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <TouchableOpacity >
                <Button
                    onPress={() => navigation.navigate('Home')}
                    color={colors.blackColor}
                    border={6}
                    width={343}
                    height={52}
                    title="LOG IN"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>NÃO TEM CONTA? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}