import products from "@/data/products";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
  return <ScrollView>{productList}</ScrollView>;
};

export default ProductList;

const styles = StyleSheet.create({});
