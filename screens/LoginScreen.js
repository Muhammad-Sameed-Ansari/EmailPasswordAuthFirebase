import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showLogin, setShowLogin] = useState(true)

    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                <TouchableOpacity onPress={() => setShowLogin(true)} style={{ flex: 1 }}>
                    <Text style={[styles.loginText, {color: showLogin ? 'black': 'gray'}]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowLogin(false)} style={{ flex: 1 }}>
                    <Text style={[styles.loginText, {color: showLogin ? 'gray': 'black'}]}>Signup</Text>
                </TouchableOpacity>
            </View>
            {!showLogin && <TextInput 
                style={styles.textInput}
                placeholder='Username'
                value={username}
                onChangeText={setUsername}
            />}
            <TextInput 
                style={styles.textInput}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput 
                style={styles.textInput}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
            />
            {!showLogin && <TextInput 
                style={styles.textInput}
                placeholder='Confirm Password'
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />}
            <Button title={showLogin ? 'Login' : 'Signup'}/>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        marginHorizontal: 16,
        padding: 16
    },
    loginText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20
    },
    textInput: {
        padding: 20,
        borderWidth: 1,
        margin: 12
        
    }
})