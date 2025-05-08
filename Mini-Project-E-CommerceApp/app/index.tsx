import ProductList from "@/components/ProductList";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F6FF",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          width: "100%",
          padding: 15,
        }}
      >
        FS SHOP
      </Text>

      <ProductList />
    </View>
  );
}
