import { View, FlatList } from "react-native";
import products from "../../../../assets/data/products";
import ProductListItem from "@/components/ProductListItem";

export default function MenuScreen() {
  return (
    <View>
      {/* <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} /> */}
      <FlatList
        data={products}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        bounces={true}
        renderItem={({ item }) => <ProductListItem product={item} />}
      />
    </View>
  );
}
