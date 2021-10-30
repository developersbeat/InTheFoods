/* eslint-disable prettier/prettier */
import React from "react";
import { Text } from "react-native";

const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
    name = "Metaverse",
    icon,
    photos = ["https://static01.nyt.com/images/2020/11/04/dining/04Outdoor5/04Outdoor5-articleLarge-v2.jpg"],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
    } = restaurant;
    
  return <Text>Restaurant Info</Text>;
};

export default RestaurantInfoCard;
