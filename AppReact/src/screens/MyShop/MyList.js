import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Pressable, StyleSheet } from "react-native";
import axios from "axios";

export default function MyList(props) {
    const navigation = props;

    renderProducts = ({ items }) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onEnterPage()}>
          <View>
            <Image>{items.image}</Image>
            <Text>{items.name}</Text>
            <Text>{Produit}</Text>
          </View>
        </TouchableHighlight>
      );
    
    return (
        <View>
          <Image>{items.image}</Image>
            <Text>{items.name}</Text>
            <Text>{"Produit"}</Text>
            <FlatList vertical data={items} renderItem={({items}) => <Text>{items.title}</Text>} />
        </View>
      );
}

const items = [];

function onEnterPage() {
        axios.get("http://localhost:5000/api/products")
            .then((response) => {
                items = response.data;
            })
            .catch((err) => {
                console.log(err.message)
            })
}

onEnterPage();

const styles = StyleSheet.create({
    partnersItemContainer: {
      flex: 1,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 215,
      borderColor: '#cccccc',
      borderWidth: 0.5,
      borderRadius: 20,
    },
    partnersPhoto: {
      width: '100%',
      height: 155,
      borderRadius: 20,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      shadowColor: 'blue',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
      elevation: 3
    },
    partnersName: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#333333',
      marginTop: 8
    },
    partnersInfo: {
      marginTop: 3,
      marginBottom: 5
    }
  });