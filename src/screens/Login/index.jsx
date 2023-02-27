import { TouchableOpacity, View, Text } from "react-native";
import Button from "../../components/Button";
import colors from "../../global/Colors";
import Input from "../../components/Input/"
import { useState } from 'react'

export default LoginScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
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
                    title="LOG IN"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>NÃO TEM CONTA? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}