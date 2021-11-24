import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, Pressable } from "react-native";
import styles from "./HomeScreenStyle";
import { products, partners } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getPartnersName } from "../../data/MockDataAPI";

export default function HomeScreen(props) {
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

  const onPressProduct = (item) => {
    navigation.navigate("Products", { item });
  };

  const renderProducts = ({ item }) => (
    <Pressable onPress={() => onPressProduct(item)}>
      <View style={styles.container} >
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.productTitle}</Text>
        <Text style={styles.partners}>{getPartnersName(item.partners_Id)}</Text>
      </View>
      </Pressable>

  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={products} renderItem={renderProducts} keyExtractor={(item) => `${item.productId}`} />
    </View>
  );
}
