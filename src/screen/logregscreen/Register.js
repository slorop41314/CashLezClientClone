import React, { Component } from 'react';
import {
    View,
    Image,
} from 'react-native'
import {
    Text,
    Form,
    Input,
    Item,
    Button,
    Container,
    Content,
    Picker,
    ListItem,

} from 'native-base'
import axios from 'axios'
import HeaderComp from '../component/Header/HeaderComp';
import { InputFloating } from '../component/InputComp/InputComp';

import Host from '../../environment/Host'

export default class Register extends Component {
    constructor() {
        super() 
        this.state = {
            fullname : '',
            email : '',
            password: '',
            phonenumber : '',
            gender: 'Pria',
            username : '',
            businessname :'',
            businessadress : '',
            city : '',
            referralcode : 0,
            submitbtn: true
        }
    }
    handleSubmitForm = async () => {
        const {fullname , email , password, phonenumber,gender, username,businessname,businessadress, referralcode} = this.state
        if(fullname != "" &&
            email != "" &&
            password != "" &&
            phonenumber != "" &&
            gender != "" &&
            username != "" &&
            businessname != "" &&
            businessadress != "" 
            ) {
            const Data = {
                fullname,
                email,
                password,
                phonenumber,
                gender,
                username,
                businessname,
                businessadress,
                referralcode
            }
            await axios.post(`${Host.localhost}/users`, Data)
            .then(res => res)
            this.props.navigation.navigate('Login')
        } else {
            alert(this.state.email)
        }
    }
    onValueChange(value) {
        this.setState({
          gender: value
        });
      }
        
    
    render() {
        return (
            <Container >               
                    <HeaderComp title="     Daftar Baru" onPressBack={() => this.props.navigation.goBack()}/>
                    <Content style={{paddingHorizontal:20, paddingBottom:100}}>
                        
                        <View style={{ alignItems:"center", padding : 20}}>
                            <Image source={require('../component/staticimage/list.png')}/>
                            <Text style={{fontSize:22}}>Daftar menjadi merchant Cashlez</Text>
                            <Text style={{fontSize:18, textAlign:"center", alignItems:"center"}}>Ayo klaim nama bisnis Anda dengan POS Cashlez</Text>
                        </View>
                        <Form style={{paddingBottom:50}}>
                        <InputFloating label="Full Name"  handleChangeText={(text) => this.setState({fullname: text})} />
                        <InputFloating label="Email" handleChangeText={(text) => this.setState({email: text})} />
                        <InputFloating label="Password" handleChangeText={(text) => this.setState({password: text})} />
                        <ListItem>
                            <Text>Gender : </Text>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 120 }}
                                selectedValue={this.state.gender}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                            <Picker.Item label="Pria" value="Pria" />
                            <Picker.Item label="Wanita" value="Wanita" />
                            </Picker>
                        </ListItem>
                        <Item >
                            <Image style={{height:30, width: 30}}source={require('../component/staticimage/benderaid.png')}/>
                            <Input 
                            placeholder="Phone Number"
                            keyboardType="number-pad"
                            onChangeText={(text)=> this.setState({phonenumber: text})}
                            />
                        </Item>
                        <InputFloating label="Username" handleChangeText={(text)=> this.setState({username:text})}/>
                        <InputFloating label="Business Name" handleChangeText={(text)=> this.setState({businessname:text})}/>
                        <InputFloating label="Business Adress" handleChangeText={(text)=> this.setState({businessadress:text})}/>
                        <InputFloating label="Referral Code" handleChangeText={(text)=> this.setState({referralcode:text})}/>
                        </Form>
                        <Button primary onPress={this.handleSubmitForm}
                        style={{justifyContent:"center"}}
                        >
                            <Text>Submit</Text>
                        </Button>
                    </Content>
            </Container>

            );
    }
}
