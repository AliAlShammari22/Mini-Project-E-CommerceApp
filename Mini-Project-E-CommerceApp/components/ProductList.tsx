import products from "@/data/products";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [visibleProduct, setVisibleProduct] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  //   const productList = products.map((product) => (
  //     <ProductItem key={product.id} product={product} />
  //   ));
  return (
    <ScrollView>
      <ScrollView horizontal style={{ marginLeft: 11.5, marginRight: 15 }}>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory("All");
            setVisibleProduct(products);
          }}
          style={[
            styles.filterButton,
            selectedCategory === "All" && styles.filterButtonActive,
          ]}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedCategory === "All" && styles.filterButtonTextActive,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory("Footwear");
            setVisibleProduct(
              products.filter((product) => product.category === "Footwear")
            );
          }}
          style={[
            styles.filterButton,
            selectedCategory === "Footwear" && styles.filterButtonActive,
          ]}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedCategory === "Footwear" && styles.filterButtonTextActive,
            ]}
          >
            Footwear
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory("Electronic");
            setVisibleProduct(
              products.filter((product) => product.category === "Electronic")
            );
          }}
          style={[
            styles.filterButton,
            selectedCategory === "Electronic" && styles.filterButtonActive,
          ]}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedCategory === "Electronic" &&
                styles.filterButtonTextActive,
            ]}
          >
            Electronic
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory("Clothing");
            setVisibleProduct(
              products.filter((product) => product.category === "Clothing")
            );
          }}
          style={[
            styles.filterButton,
            selectedCategory === "Clothing" && styles.filterButtonActive,
          ]}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedCategory === "Clothing" && styles.filterButtonTextActive,
            ]}
          >
            Clothing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedCategory("Kitchen");
            setVisibleProduct(
              products.filter((product) => product.category === "Kitchen")
            );
          }}
          style={[
            styles.filterButton,
            selectedCategory === "Kitchen" && styles.filterButtonActive,
          ]}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedCategory === "Kitchen" && styles.filterButtonTextActive,
            ]}
          >
            Kitchen
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {/* {productList} */}
      {visibleProduct.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ScrollView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  filterButton: {
    fontSize: 20,
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FE7743",
    color: "#FE7743",
    margin: 3.5,
    backgroundColor: "#EFEEEA",
  },
  filterButtonActive: {
    backgroundColor: "#FE7743",
  },
  filterButtonText: {
    color: "#FE7743",
    fontSize: 20,
  },
  filterButtonTextActive: {
    color: "#FFFFFF",
  },
});
