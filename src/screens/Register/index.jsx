import { TouchableOpacity, View, Text } from "react-native";
import Input from "../../components/Input/"
import Button from "../../components/Button/"
import colors from "../../global/Colors";

export default RegisterScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{    
                fontSize: 20,
                marginBottom: 30
            }}>
            Cadastre-se
            </Text>


            <TouchableOpacity>
                <Input 
                    iconName={'account'} 
                    placeholder="E-mail" 
                    autoCapitalize="none" 
                    autoCorrect={false}
                    keyboardType="email-address"
                />
                <Input 
                    iconName={'lock-outline'} 
                    placeholder="Senha" 
                    autoCorrect={false}
                    secureTextEntry 
                    autoCapitalize="none" 
                    keyboardType="default"
                />
                <Input 
                    iconName={'lock-outline'} 
                    placeholder="Confirme sua Senha" 
                    autoCorrect={false}
                    secureTextEntry 
                    autoCapitalize="none" 
                    keyboardType="default"
                />
                <Button
                    onPress={() => navigation.navigate('Home')}
                    color={colors.blackColor}
                    border={6}
                    width={343}
                    height={52}
                    title="REGISTER"
                />
            </TouchableOpacity>


        </View>
    );
}