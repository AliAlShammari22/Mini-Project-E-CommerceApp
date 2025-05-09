import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProductItemsProps {
  product: {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
  };
}

const ProductItem = ({ product }: ProductItemsProps) => {
  return (
    <View
      style={{
        backgroundColor: "#EFEEEA",
        padding: 15,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#FE7743",
        marginRight: 15,
        marginBottom: 15,
        marginLeft: 15,
        marginTop: 5,
      }}
    >
      <Image
        source={{
          uri: product.image,
        }}
        style={{
          height: 200,
          width: "100%",
          borderRadius: 10,
          backgroundColor: "white",
        }}
        resizeMode="stretch"
      />
      <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 18 }}>
        {product.title}
      </Text>
      <Text style={{ marginTop: 5, fontSize: 15 }}>{product.category}</Text>
      <Text style={{ marginTop: 5, fontSize: 15, marginBottom: 10 }}>
        {product.price.toFixed(2)} KD
      </Text>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#FE7743",
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#273F4F",
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "white",
            }}
          >
            Add To Favorites
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
