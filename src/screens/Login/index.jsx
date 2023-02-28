import { TouchableOpacity, View, Text } from "react-native";
import Button from "../../components/Button";
import colors from "../../global/Colors";
import Input from "../../components/Input/"
import { StyleSheet } from 'react-native';

export default LoginScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Entre na sua conta</Text>
            <TouchableOpacity >  
                
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
                <Button
                    onPress={() => navigation.navigate('Home')}
                    color={colors.blackColor}
                    border={6}
                    width={343}
                    height={52}
                    title={<Text style={{color: colors.whiteColor}}>LOGIN</Text>}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <View style={{paddingTop: 12}}><Text style={{fontSize: 15}}>Não tem conta? <Text style={styles.singUp}>Cadastre-se</Text></Text></View>
            </TouchableOpacity>
        </View>
    );
}

export const styles = StyleSheet.create({
  singUp: {
    color: colors.blueRegisterColor
  },
  title: {
    fontSize: 20,
    marginBottom: 30
  }
});