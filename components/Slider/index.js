import React, { useState } from "react";
import { View, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import tailwind from "twrnc";

const CardSlider = ({ cardData }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderCard = ({ item }) => (
    <View style={tailwind`w-64 h-72 mx-2`}>
      <Image
        source={{ uri: item.image_url.en }}
        style={tailwind`w-full h-full object-cover`}
      />
    </View>
  );

  return (
    <View>
      <Carousel
        data={cardData}
        renderItem={renderCard}
        sliderWidth={320} // Set your desired slider width
        itemWidth={200} // Set your desired item width
        onSnapToItem={(index) => setActiveSlide(index)}
        loop={true}
      />
      <Pagination
        dotsLength={cardData.length}
        activeDotIndex={activeSlide}
        dotStyle={tailwind`w-3 h-3 rounded-full m-2 bg-blue-500`}
        containerStyle={tailwind`pt-2`}
        inactiveDotStyle={tailwind`w-3 h-3 rounded-full m-2 bg-gray-300`}
      />
    </View>
  );
};

export default CardSlider;
