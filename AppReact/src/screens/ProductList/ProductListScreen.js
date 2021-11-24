import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./ProductListScreenStyle";
import { getProducts, getPartnersName } from "../../data/MockDataAPI";

export default function ProductListScreen(props) {
  const { navigation, route } = props;

  const item = route?.params?.partners;
  const productsArray = getProducts(item.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, []);

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
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={productsArray} renderItem={renderProducts} keyExtractor={(item) => `${item.productsId}`} />
    </View>
  );
}
