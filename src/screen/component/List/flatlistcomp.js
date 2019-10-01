import React, { Component } from 'react';
import { 
    Dimensions, 
    FlatList , 
    View, 
    Text,
    TouchableOpacity , 
    Image
} from 'react-native';
import { isTemplateElement } from '@babel/types';


const height = Dimensions.get('window').height
export default class Flatlistcomp extends Component {
    render() {
        const defaultimage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAScAAACrCAMAAAATgapkAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A8W4AAH7AbJ4AAAAAElFTkSuQmCC"

        return (
            <FlatList
            data={this.props.dataNya}
            //Item Separator View
            renderItem={({ item }) => (

                // Single Comes here which will be repeatative for the FlatListItems
                <TouchableOpacity>
                <View>  
                <View style={{flexDirection: "row", borderWidth:1}}>
                    <View style={{justifyContent: "center", alignItems:"center", borderRightWidth:1}}>
                        <Image style={{height : height/12, width: height/12}} source={{uri : item.image ? item.image : defaultimage}}/>
                        {item.image ? null : 
                        item.categoryname ? <Text style={{position:"absolute",fontSize:30, color :'red'}}>{item.categoryname[0].toUpperCase()}</Text> : 
                        item.name ? <Text style={{position:"absolute", fontSize:30,color:'red' }}>{item.name[0].toUpperCase()}</Text> : null
                        }    
                    </View>           
                    <View style={{paddingHorizontal:"2%",height:height/10, justifyContent: "center", alignItems: "flex-start",}}>
                        
                        {item.categoryname ? <Text style={{fontSize:24}}>{item.categoryname}</Text> : null}
                        {item.name ? <Text style={{fontSize:18}}>{item.name}</Text> : null}
                        {item.price ? <Text style={{fontSize:13}}>{item.price}</Text> : null}
                    </View>
                </View>
                </View>
                </TouchableOpacity>
            )}
            enableEmptySections={true}
            keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}