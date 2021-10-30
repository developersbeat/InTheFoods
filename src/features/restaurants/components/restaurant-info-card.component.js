/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components/native";
import { Text , StyleSheet} from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
export default RestaurantInfoCard;
