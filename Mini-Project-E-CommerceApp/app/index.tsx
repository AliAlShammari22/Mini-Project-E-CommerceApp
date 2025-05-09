import ProductList from "@/components/ProductList";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAF1E6",
      }}
    >
      <View style={{ flexDirection: "row", width: "100%" }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            padding: 16,
          }}
        >
          Ali's Shop
        </Text>
        <Text
          style={{
            marginTop: 23,
          }}
        >
          Shop like you never do before.
        </Text>
      </View>

      <ProductList />
    </View>
  );
}
