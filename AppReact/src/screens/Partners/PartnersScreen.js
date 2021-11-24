import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Pressable } from "react-native";
import styles from "./PartnersScreenStyle";

import { partners } from "../../data/dataArrays";
import { getNumberProducts } from "../../data/MockDataAPI";
import MenuImage from "../../components/MenuImage/MenuImage";


export default function PartnersScreen(props) {

    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({

          headerLeft: () => (
            <MenuImage
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => <View />,
        });
      }, []);

      const onPressPartners = (item) => {
        const title = item.name;
        const partners = item;
        navigation.navigate("ProductList", { partners, title });
      };

      const renderPartners = ({ item }) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressPartners(item)}>
          <View style={styles.partnersItemContainer}>
            <Image style={styles.partnersPhoto} source={{ uri: item.photo_url }} />
            <Text style={styles.partnersName}>{item.name}</Text>
            <Text style={styles.partnersInfo}>{getNumberProducts(item.id)} produit(s) disponible(s)</Text>
          </View>
        </TouchableHighlight>

      );

      return (
        <View>
          <FlatList data={partners} renderItem={renderPartners} keyExtractor={(item) => `${item.id}`} />
        </View>
      );
    }