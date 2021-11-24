import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get("window")
// import icons
import Icon from 'react-native-vector-icons/Ionicons';
export default function CartScreen(props) {
    const {navigation} = props

    return (
        <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
           <View style={{height:20}} />
           <Text style={{fontSize:28, color:"gray"}}>Cart - Panier</Text>
           <View style={{height:10}} />

           <View style={{flex:1}}>

             <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
               <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} source={{uri: "https://dhf6qt42idbhy.cloudfront.net/medias/sys_master/h5a/hc3/10313805266974.jpg"}} />
               <View style={{flex:1, backgroundColor:'transparent', padding:10, justifyContent:"space-between"}}>
                 <View>
                   <Text style={{fontWeight:"bold", fontSize:20}}>Mozzarella</Text>
                   <Text>Ceci est une description</Text>
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                   <Text style={{fontWeight:'bold', color:'black',fontSize:20}}>2€</Text>
                   <View style={{flexDirection:'row', alignItems:'center'}}>
                     <TouchableOpacity>
                       <Icon name="ios-remove-circle" size={30} color={"#9fd236"} />
                     </TouchableOpacity>
                     <Text style={{paddingHorizontal:8, fontWeight:'bold'}}>2</Text>
                     <TouchableOpacity>
                       <Icon name="ios-add-circle" size={30} color={"#9fd236"} />
                     </TouchableOpacity>
                   </View>
                 </View>
               </View>
             </View>

           </View>

           <View style={{height:20}} />

         <TouchableOpacity style={{
             backgroundColor:"#9fd236",
             width:width-40,
             alignItems:'center',
             padding:10,
             borderRadius:5
           }}>
           <Text style={{
               fontSize:24,
               fontWeight:"bold",
               color:'white'
             }}>
             CHECKOUT - PAIEMENT
           </Text>
         </TouchableOpacity>

         <View style={{height:20}} />


        </View>
      );
    }
