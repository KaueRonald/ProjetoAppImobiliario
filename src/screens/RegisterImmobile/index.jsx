import { View, Text, TouchableOpacity, Button } from 'react-native';

export default RegisterImmobile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>RegisterImmobile</Text>
            <TouchableOpacity>
                <Button
                    title='Cadastrar'
                    onPress={() => navigation.navigate('Dashboard')}
                />
            </TouchableOpacity>
        </View>
    )
}