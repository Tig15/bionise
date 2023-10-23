import React from "react";
import { View, Image } from "react-native";
import Swiper from "react-native-deck-swiper";

const CardSlider = ({ cardData }) => {
  console.log("Card Data", cardData);

  // const renderCard = (card) => (
  //   <View>
  //     <Image
  //       source={{ uri: card.imageUrl }}
  //       style={{ width: 200, height: 300 }} // Set your desired width and height
  //     />
  //   </View>
  // );

  // return (
  //   <Swiper
  //     cards={cardData}
  //     renderCard={renderCard}
  //     onSwipedAll={() => console.log("All cards have been swiped")}
  //   />
  // );
};

export default CardSlider;
