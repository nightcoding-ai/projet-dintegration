import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Pressable } from "react-native";
import styles from "./SearchScreenStyle";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getProductsByPartnersName, getProductsByProductName, getPartnersName } from "../../data/MockDataAPI";
import { TextInput } from "react-native-gesture-handler";
import BackButton from '../../components/BackButton/BackButton';

export default function SearchScreen(props) {
    const { navigation } = props;

    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <BackButton
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerTitle: () => (
            <View style={styles.searchContainer}>
              <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
              <TextInput
                style={styles.searchInput}
                onChangeText={handleSearch}
                value={value}
              />
              <Pressable onPress={() => handleSearch("")}>
              <Image style={styles.searchIcon} source={require("../../../assets/icons/close.png")} />
              </Pressable>
            </View>
          ),
          headerRight: () => <View />,
        });
      }, [value]);

      useEffect(() => {}, [value]);

      const handleSearch = (text) => {
        setValue(text);
        var productArray1 = getProductsByProductName(text);
        var productArray2 = getProductsByPartnersName(text);
        var aux = productArray1.concat(productArray2);
        var productArray = [...new Set(aux)];

        if (text == "") {
          setData([]);
        } else {
          setData(productArray);
        }
      };

      const onPressProduct = (item) => {
        navigation.navigate("Products", { item });
      };

      const renderProducts = ({ item }) => (
        <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressProduct(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
            <Text style={styles.title}>{item.productTitle}</Text>
            <Text style={styles.product}>{getPartnersName(item.partners_Id)}</Text>
          </View>
        </TouchableHighlight>
      );

      return (
        <View>
          <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={data} renderItem={renderProducts} keyExtractor={(item) => `${item.productsId}`} />
        </View>
      );

}