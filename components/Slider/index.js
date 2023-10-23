import React, { useState } from "react";
import { View, Image, Dimensions } from "react-native";
import tailwind from "twrnc";
import Carousel from "react-native-reanimated-carousel";
import AnimatedDotsCarousel from "react-native-animated-dots-carousel";

const CardSlider = ({ cardData }) => {
  const [index, setIndex] = useState(0);
  const width = Dimensions.get("window").width;
  const cardArray = Object.values(cardData);

  const renderCard = ({ item }) => (
    <View style={tailwind`w-[30%] h-[30%]`}>
      <Image
        source={{ uri: item.image_url.en }}
        style={tailwind`w-full h-full object-cover`}
      />
    </View>
  );

  const handleIndex = (index) => {
    setIndex(index);
  };

  return (
    <View style={tailwind`flex-1`}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        data={cardArray}
        renderItem={renderCard}
        pagingEnabled={true}
        autoPlay={false}
        interpolateOpacityAndColor={false}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        onProgressChange={(_, absoluteProgress) => {
          handleIndex(Math.round(absoluteProgress));
        }}
      />

      <View style={tailwind`absolute left-63 top-78`}>
        <AnimatedDotsCarousel
          length={cardArray.length}
          currentIndex={index}
          maxIndicators={cardArray.length}
          interpolateOpacityAndColor={false}
          activeIndicatorConfig={{
            color: "#EC3C4C",
            margin: 3,
            opacity: 1,
            size: 8,
          }}
          inactiveIndicatorConfig={{
            color: "#F96B2B",
            margin: 3,
            opacity: 0.5,
            size: 8,
          }}
          decreasingDots={[
            {
              config: { color: "#F96B2B", margin: 3, opacity: 0.5, size: 6 },
              quantity: 1,
            },
            {
              config: { color: "#F96B2B", margin: 3, opacity: 0.5, size: 4 },
              quantity: 1,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default CardSlider;
