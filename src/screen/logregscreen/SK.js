import React, { Component } from 'react';
import { 
    View,
 } from 'react-native';
 import {
     Header, 
     Container,
     Content,
     Left,
     Text,
     Icon,
     Title,
     Body,
     Button,
     CheckBox,
     ListItem
 } from 'native-base'

import HeaderComp from '../component/HeaderComp'

 export default class SK extends Component {
    constructor() {
        super() 
            this.state = {
                checkedaggr : false,
                nextbtn : true
            
        }
    }

    handleCheckBox = () => {
        if(!this.state.checkedaggr) {
            this.setState({checkedaggr : true, nextbtn:false})
        }else {
            this.setState({checkedaggr : false, nextbtn : true})
        }

    }

    render() {
         return (
             <Container>
                 <HeaderComp title="Terms & Condition" onPressBack={() => this.props.navigation.goBack()}/>
                 <Content>
                    <Text>Apa saja xxx</Text>
                    <ListItem noBorder >
                        <CheckBox onPress={this.handleCheckBox} checked={this.state.checkedaggr}/>
                        <Body>
                            <Text style={{textDecorationLine:"underline"}}>I have read and agree TERMS AND CONDITION</Text>
                        </Body>
                    </ListItem>
                 </Content>
                 <Button 
                 disabled={this.state.nextbtn} 
                 onPress={() => this.props.navigation.navigate('Register')}
                 style={{justifyContent:"center"}}
                 >
                     <Text>Next</Text>
                 </Button>
             </Container>
         );
     }
 }