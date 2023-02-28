import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = (props) => {
    const [sec, setSec] = useState(props.secureTextEntry)

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor={"#7B8794"}
                {...props}
                secureTextEntry={sec}
            />
            <Icon name={props.iconName} size={26} color="black" style={styles.icon} />
            {props.secureTextEntry && (
                <TouchableOpacity onPress={() => setSec(!sec)}>
                    <Icon
                        name={sec ? 'eye' : 'eye-off'}
                        size={26}
                        color="black"
                        style={styles.iconSecret}>
                    </Icon>
                </TouchableOpacity>
            )}

        </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
    },
    input: {
        height: 50,
        flex: 1,
        backgroundColor: '#F8F9FA',
        paddingLeft: 40,
        borderRadius: 8,
        fontSize: 18,
        borderColor: '#E4E7EB',
        borderWidth: 1,

    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 12,
    },
    iconSecret: {
        position: 'absolute',
        right: 30,
        top: 12,
    }
})

export default Input