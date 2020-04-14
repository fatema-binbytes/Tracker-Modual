import React,{Component} from 'react';
import {TouchableOpacity,View, FlatList, Text, Image} from 'react-native';
import Data from '../data/covidData'
import styles from './home-styles';
import colors from '../theme/colors';
import stateWiseSubData from '../data/stateWise';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            subData: false,
            stateName:''
        }
    }
    
    renderHeader = (label,txtColor,style) => {
        return(
            <View style={[styles.headerContainer, style]}>
                <Text style={{textAlign:'center',color:txtColor,fontWeight: 'bold'}}>{label.toUpperCase()}</Text>
            </View>
        )
    }
    item= (itemName, txtStyle, containerStyle) => {
        return(
            <View style={[containerStyle, styles.txtContainer]}>
                <Text style={txtStyle}>{itemName}</Text>
            </View>   
        )
    }
    renderItem = (item) => {
        return(
            <TouchableOpacity style={{flexDirection:'row'}} 
                onPress={() =>  this.setState({subData:!this.state.subData,stateName:item.state})}>
                {this.item(item.state.toUpperCase(), 
                    {
                        textAlign:'left',
                        color: colors.gray3,
                        fontSize:12,
                        fontWeight:'bold',
                    },
                    {
                        backgroundColor:colors.greyc3,
                        width:90
                    }
                )}
                {this.item(item.confirmed,
                    {
                        textAlign:'right',
                        color:colors.conformed,
                    }
                )}
                 {this.item(item.active,
                    {
                        textAlign:'right',
                        color:colors.active,
                    }
                )}
                 {this.item(item.recovered,
                    {
                        textAlign:'right',
                        color:colors.recovered,
                    }
                )}
                {this.item(item.deaths,
                    {
                        textAlign:'right',
                        color:colors.deaths,
                    }
                )}
            </TouchableOpacity>
        )
    }
    render() {
        return(
            <View style={styles.container}>
                <View>
                   <Text style={styles.headerTxt}>INDIA COVID-19 TRACKER</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    {this.renderHeader('State/UT',colors.gray3,{width:90})}
                    {this.renderHeader('Confirmed',colors.conformed)}
                    {this.renderHeader('Active',colors.active)}
                    {this.renderHeader('Recovered',colors.recovered)}
                    {this.renderHeader('Deaths',colors.deaths)}
                </View> 
                <FlatList data={Data.statewise}
                    renderItem={({item}) =>  {
                        return(
                        <View>
                            {this.renderItem(item)}
                            {this.state.subData && item.state== this.state.stateName ? 
                            <View style={{marginLeft:20}}>
                                {
                                    stateWiseSubData.map((x,key) => {
                                        if(x.state === item.state) {
                                            return(
                                                <View key={key}>
                                                    <View style={{flexDirection:'row'}}>
                                                    {this.renderHeader('DISCRITC', colors.gray3, {width:110})}
                                                    {this.renderHeader('CONFORMED', colors.conformed, {width:100})}
                                                    </View>
                                                    
                                                    <FlatList data={x.districtData}
                                                        renderItem={({item}) => {
                                                        return(
                                                            <View style={{flexDirection:'row'}}>
                                                                
                                                                {this.item(item.district.toUpperCase(), 
                                                                    {
                                                                        textAlign:'left',
                                                                        color: colors.gray3,
                                                                        fontSize:12,
                                                                        fontWeight:'bold',
                                                                    },
                                                                    {
                                                                        backgroundColor:colors.greyc3,
                                                                        width:110
                                                                    }
                                                                )}
                                                                {this.item(item.confirmed,
                                                                    {
                                                                        textAlign:'right',
                                                                        color:colors.conformed,
                                                                    }
                                                                )}
                                                            </View>
                                                        )
                                                    }}
                                                    keyExtractor={(item,index) => `${index}`}
                                                    />
                                                </View>
                                            )
                                        }
                                    })
                                }
                            </View> : <View/>
                        
                            }</View>)
                        }}                          
                    keyExtractor={(item,index) => `${index}`}
                />
            </View>
        )
    }
}

export default Home;