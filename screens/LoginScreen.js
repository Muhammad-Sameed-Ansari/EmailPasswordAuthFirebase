import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showLogin, setShowLogin] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace('Home')
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () =>  {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: username
                })
            })
            .catch(error => alert(error.message))
    }

    const handleLogIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
                console.log('Log in: ' + user.email)
            })
            .catch(error => alert(error.message))
    }

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
                autoCorrect={false}
                autoCapitalize={false}
                onChangeText={setUsername}
            />}
            <TextInput 
                style={styles.textInput}
                placeholder='Email'
                value={email}
                autoCorrect={false}
                autoCapitalize={false}
                onChangeText={setEmail}
            />
            <TextInput 
                style={styles.textInput}
                placeholder='Password'
                value={password}
                autoCorrect={false}
                autoCapitalize={false}
                onChangeText={setPassword}
            />
            {!showLogin && <TextInput 
                style={styles.textInput}
                placeholder='Confirm Password'
                value={confirmPassword}
                autoCorrect={false}
                autoCapitalize={false}
                onChangeText={setConfirmPassword}
            />}

            {showLogin && <Button title='Login' onPress={handleLogIn}/>}
            {!showLogin && <Button title='Signup' onPress={handleSignUp}/>}
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