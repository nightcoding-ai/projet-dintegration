import React, { useLayoutEffect, useRef, useState } from "react";
import { ScrollView, Text, View, Image, Dimensions, TouchableHighlight } from "react-native";
import styles from "./ProductsScreenStyles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { getPartnersName, getPartnersById, getProducts } from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import ViewButtonSales from '../../components/ViewButtonSales/ViewButtonSales';

const { width: viewportWidth } = Dimensions.get("window");

export default function ProductsScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.item;
  const partners = getPartnersById(item.partners_Id);
  const title = getPartnersName(partners.id);

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "false",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );




  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <Carousel
            ref={slider1Ref}
            data={item.photosArray}
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setActiveSlide(0)}
          />
          <Pagination
            dotsLength={item.photosArray.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotColor="rgba(255, 255, 255, 0.92)"
            dotStyle={styles.paginationDot}
            inactiveDotColor="white"
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={slider1Ref.current}
            tappableDots={!!slider1Ref.current}
          />
        </View>
      </View>
      <View style={styles.infoProductContainer}>
        <Text style={styles.infoProductName}>{item.productTitle}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight onPress={() => navigation.navigate("ProductList", { partners, title })}>
            <Text style={styles.partners}>{getPartnersName(item.partners_Id).toUpperCase()}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.infoContainer}>
          <Image style={styles.infoPhoto} source={require("../../../assets/icons/time.png")} />
          <Text style={styles.infoProduct}>{item.productTime}  </Text>
        </View>

        <View style={styles.infoContainer}>
        <ViewButtonSales
            onPress={() => {


            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionProduct}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
