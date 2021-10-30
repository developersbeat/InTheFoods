/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components/native";
import { Text , StyleSheet} from "react-native";
import { Card } from "react-native-paper";

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;
const RestaurantCardCover = styled(Card.Cover)`
padding : 20px;
background-color: white;
`;
const RestaurantCard = styled(Card)`
background-color: white;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Metaverse",
    icon,
    photos = [
      "https://static01.nyt.com/images/2020/11/04/dining/04Outdoor5/04Outdoor5-articleLarge-v2.jpg",
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};


export default RestaurantInfoCard;
