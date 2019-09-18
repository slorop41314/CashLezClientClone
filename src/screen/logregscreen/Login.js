import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    Form,
    Item,
    Input,
    Icon,
    ListItem,
    Right,
    CheckBox,
    Body,
    Button
} from 'native-base'
import { 
    Image,
    View,
    TouchableOpacity

} from 'react-native';
import axios from 'axios'
import Host from '../../environment/Host'

export default class Login extends Component {
    constructor() {
        super() 
        this.state = {
            username : "",
            password : "",
            iconpsw : "ios-eye-off",
            checked : false,
            shwhidepsw: true
        }
    }

    handleCheckBox = () => {
        if(!this.state.checked) {
            this.setState({checked : true})
        }else {
            this.setState({checked : false})
        }

    }
    handlePswIcon = () => {
        if(this.state.iconpsw === "ios-eye") {
            this.setState({iconpsw : "ios-eye-off", shwhidepsw:true})
        }else {
            this.setState({iconpsw : "ios-eye", shwhidepsw:false})
        }
    }
    handleLogin = async () => {
        if (this.state.password != "" && this.state.username != ""){
            const Data = {
                username : this.state.username,
                password : this.state.password
            }
            await axios.post(`${Host.localhost}/auth`, Data)
            alert('Success Login')
        }
    }
        
    
    render() {
        return (
            <Container style={{ paddingHorizontal:40, width: "100%"}}>
                <Content>
                    <View style={{justifyContent:"center", alignItems: "center"}}>
                    <Image source={require('../component/logo.png')}/>
                    </View>
                    <View style={{alignItems:"center"}}>
                    <Text style={{padding: 10, fontSize: 25}} >Welcome</Text>
                    <Text style={{paddingBottom: 20, fontSize: 18}}>Login to do transaction</Text>
                    </View>
                    <Form>
                        <Item>
                            <Icon name="ios-person"/>
                            <Input 
                            placeholder="Username"
                            keyboardType="default"
                            onChangeText={(text)=> this.setState({username: text})}
                            />
                        </Item>
                        <Item>
                            <Icon name="ios-lock"/>
                            <Input 
                            placeholder="Password"
                            keyboardType="default"
                            secureTextEntry={this.state.shwhidepsw}
                            onChangeText={(text)=> this.setState({password: text})}
                            />
                            <Right>
                                <Icon onPress={this.handlePswIcon} name={this.state.iconpsw} />
                            </Right>
                        </Item>
                        <ListItem noBorder>
                            <CheckBox onPress={this.handleCheckBox} checked={this.state.checked} />
                            <Body>
                            <Text>Remember me</Text>
                            </Body>
                        </ListItem>
                    </Form>
                    <Content style={{paddingBottom:10}}>
                    <Button primary bordered onPress={this.handleLogin} style={{justifyContent:"center"}} >
                        <Text>Login</Text>
                    </Button>
                    </Content>
                    <Button info onPress={() => this.props.navigation.navigate('SK')} style={{justifyContent:"center"}}>
                        <Text>Sign Up</Text>
                    </Button>               
                    <View style={{alignItems:"flex-end"}}>
                        <TouchableOpacity style={{ paddingTop:15}}>    
                            <Text>Forgot PIN ?</Text>
                        </TouchableOpacity>
                    </View>
                    
                </Content>
            </Container>
        );
    }
}