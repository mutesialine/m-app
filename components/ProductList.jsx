import * as React from "react";
import { FlatList } from "react-native";
import { products } from "../data/product";
import Productcard from "./ProductCard";

export default function ProductList() {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => <Productcard {...item} />}
      className="px-5"
    />
  );
}
