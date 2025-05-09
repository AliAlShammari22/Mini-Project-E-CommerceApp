import products from "@/data/products";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <ScrollView>
      <ScrollView horizontal style={{ marginLeft: 11.5, marginRight: 15 }}>
        <TouchableOpacity>
          <Text style={styles.filterButton}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.filterButton}>Footwear</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.filterButton}>Electronic</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.filterButton}>Clothing</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.filterButton}>Kitchen</Text>
        </TouchableOpacity>
      </ScrollView>
      {productList}
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
  //   container: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //     // backgroundColor: "red",
  //   },
  //   containerStyle: {
  //     paddingRight: 20,
  //     marginRight: 15,
  //     paddingLeft: 20,
  //     paddingBottom: 20,
  //   },
});
