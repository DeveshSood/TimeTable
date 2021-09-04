import * as React from 'react';
import { Text, View, TextInput, Touchable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import db from '../config';
//import firebase from 'firebase';

export default class WelcomeScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            emailId: '',
            password: '',
            confirm_password: '',
            first_name: '',
            last_name: '',
            contact: ''
        }
    }
    render(){
        return(
            <View>
                <SafeAreaView>
                    <View>
                        <TextInput
                            style={styles.loginBox}
                            placeholder="someone@example.com"
                            keyboardType="email-address"
                            onChangeText={(text)=>{
                                this.setState({
                                    emailId: text
                                })
                            }}
                        />
                        <TextInput
                            style={styles.loginBox}
                            secureTextEntry={true}
                            placeholder="password"
                            onChangeText={(text)=>{
                                this.setState({
                                    password: text
                                })
                            }}
                        />

                    </View>
                </SafeAreaView>
            </View>
        )
    }
}